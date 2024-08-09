import { useState, useEffect } from 'preact/hooks';
import { useGlobal } from '/src/context/GlobalContext'; 
import { route } from 'preact-router';
import { ref, push, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { database } from '../firebase';

const QuizForm = ({ quizzes, setQuizzes }) => {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const [image, setImage] = useState(null);
  const { state } = useGlobal(); 

  useEffect(() => {
    if (!state.GlobalVarIsLoggedIn) {
      route('/');
    }
  }, [state.GlobalVarIsLoggedIn]);

  // fill the form fields with existing quiz data when editing
  useEffect(() => {
    if (quizzes) {
      setQuizTitle(quizzes.title || '');
      setQuizDescription(quizzes.description || '');
      if(quizzes.questions)
      setQuestions(quizzes.questions.map((question) => ({
        text: question.text,
        options: question.options,
        correctOptionIndex: question.correctOption, // Map this correctly
      })) || []);
      setImage(quizzes.image || null);
      document.getElementById("titleQuizForm").style="hidden"
    }
  }, [quizzes]);


  const handleBackClick = () => {
    route('/welcome');
  };

  const addQuestion = () => {
    setQuestions([...questions, { text: '', answer: '', options: ['', '', '', ''], correctOptionIndex: null }]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, qIndex) => qIndex !== index);
    setQuestions(updatedQuestions);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const saveQuiz = async (e) => {
    e.preventDefault();
    const newQuiz = {
      title: quizTitle,
      description: quizDescription,
      questions: questions.map((question) => ({
        text: question.text,
        options: question.options,
        correctOption: question.correctOptionIndex, // Ensure correctOptionIndex is mapped correctly
      })),
    };

    try {
      const quizzesRef = ref(database, 'quizzes');
      const newQuizRef = push(quizzesRef);

      if (image) {
        const storage = getStorage();
        const imageRef = storageRef(storage, `quiz-images/${newQuizRef.key}`);
        await uploadBytes(imageRef, image);
        const imageURL = await getDownloadURL(imageRef);
        newQuiz.image = imageURL;
      }

      await set(newQuizRef, newQuiz);
      setQuizzes([...quizzes, { ...newQuiz, id: newQuizRef.key }]);
      alert("New Quiz added to database");
      route('/welcome');
    } catch (error) {
      alert("Failed to save");
      console.error('Save quiz failed:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center mb-20">
      <h2 id="titleQuizForm" className="text-5xl mb-5 shimmer">Create a New Quiz</h2>
      <form onSubmit={saveQuiz} className="flex flex-col items-center w-full">
        <div className="mb-4 w-1/2">
          <label className="block text-center font-bold mb-4" htmlFor="quiz-title">
            Quiz Title
          </label>
          <input
            className="shadow appearance-none border border-black rounded w-full py-4 h-10 px-3 leading-tight focus:outline-none focus:shadow-outline bg-blue-200 text-black"
            id="quiz-title"
            type="text"
            placeholder="Enter quiz title"
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
          />
        </div>
        <div className="mb-4 w-1/2">
          <label className="block text-center font-bold mb-4" htmlFor="quiz-description">
            Quiz Description
          </label>
          <textarea
            className="bg-blue-200 text-black shadow appearance-none border border-black rounded w-full py-4 h-20 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="quiz-description"
            placeholder="Enter quiz description"
            value={quizDescription}
            onChange={(e) => setQuizDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4 w-1/2">
          <label className="block text-center font-bold mb-4" htmlFor="quiz-image">
            Quiz Image
          </label>
          <input
            className="bg-blue-200 text-black shadow appearance-none border border-black rounded w-full py-4 h-10 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="quiz-image"
            type="file"
            onChange={handleImageChange}
          />
        </div>
        <div id="questions-list" className="mb-4 w-1/2">
          {questions.map((question, index) => (
            <div key={index} className="mb-4 bg-gray-200 p-4 rounded shadow">
              <label onClick={() => removeQuestion(index)} 
              className="block text-right text-red-500 hover:text-red-700 font-bold mb-200 ml-500"> Cancel 
              </label>
              
              <label className="block text-gray-700 text-center font-bold mb-2">Question {index + 1}</label>
              <input
                className="shadow appearance-none border border-black rounded w-full py-4 h-12 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter question"
                value={question.text}
                onChange={(e) => {
                  const updatedQuestions = [...questions];
                  updatedQuestions[index].text = e.target.value;
                  setQuestions(updatedQuestions);
                }}
              />

              <label className="block text-gray-700 text-center font-bold mb-2">Options</label>
              <p className="text-gray-600 text-center mb-2">Enter the possible answers and select the correct one using the radio buttons.</p>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name={`correctOption-${index}`}
                    checked={question.correctOptionIndex === optionIndex}
                    onChange={() => {
                      const updatedQuestions = [...questions];
                      updatedQuestions[index].correctOptionIndex = optionIndex;
                      updatedQuestions[index].answer = updatedQuestions[index].options[optionIndex];
                      setQuestions(updatedQuestions);
                    }}
                  />
                  <input
                    className="ml-2 shadow appearance-none border border-black rounded w-full py-4 h-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder={`Enter option ${optionIndex + 1}`}
                    value={option}
                    onChange={(e) => {
                      const updatedQuestions = [...questions];
                      updatedQuestions[index].options[optionIndex] = e.target.value;
                      setQuestions(updatedQuestions);
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mb-2 flex flex-col items-center">
          <button
            type="button"
            onClick={addQuestion}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg mb-4 transition duration-500"
          >
            Add Question
          </button>
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg mb-4 transition duration-500"
          >
            Save Quiz
          </button>
          <button
            onClick={handleBackClick}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuizForm;
