import { useState, useEffect } from 'preact/hooks';
import { useGlobal } from '/src/context/GlobalContext';
import { route } from 'preact-router';
import { ref, push, set,remove } from 'firebase/database';
import { database } from '../firebase';

const QuizForm = ({  quizId, quizzes, setQuizzes }) => {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState({ visible: false,title: '', message: '', type: '' });
  const { state } = useGlobal();

  useEffect(() => {
    if (!state.GlobalVarIsLoggedIn) {
      route('/');
    }
  }, [state.GlobalVarIsLoggedIn]);

  useEffect(() => {
    if (quizzes) {
      setQuizTitle(quizzes.title || '');
      setQuizDescription(quizzes.description || '');
      setQuestions(
        (quizzes.questions || []).map((question) => ({
          text: question.text,
          options: question.options,
          correctOptionIndex: question.correctOption, // Map this correctly
        }))
      );
      document.getElementById("titleQuizForm").style = "hidden";
    }
  }, [quizzes]);

  const handleBackClick = () => {
    setShowModal({ visible: true, message: 'You have unsaved changes. Are you sure you want to go back?', type: 'confirm' });
  };

  const addQuestion = () => {
    setQuestions([...questions, { text: '', answer: '', options: ['', '', '', ''], correctOptionIndex: null }]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, qIndex) => qIndex !== index);
    setQuestions(updatedQuestions);
  };

  const saveQuiz = async (e) => {
    e.preventDefault();
  
    // Validation check for empty title, description, or no questions
    if (!quizTitle || !quizDescription || questions.length === 0) {
      setShowModal({
        title: 'Empty cells',
        visible: true,
        message: 'Please provide a title, description, and at least one question before saving the quiz.',
        type: 'error'
      });
      return;
    }
  
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
      if (quizzes.id) {
        // Delete existing quiz before updating
        const quizRef = ref(database, `quizzes/${quizzes.id}`);
        await remove(quizRef); // Ensure this completes before adding new quiz
      }
  
      // Add new quiz
      const quizzesRef = ref(database, 'quizzes');
      const newQuizRef = push(quizzesRef);
      await set(newQuizRef, newQuiz);
  
      setQuizzes((prevQuizzes) => {
        // Ensure prevQuizzes is an array
        const updatedQuizzes = Array.isArray(prevQuizzes) ? prevQuizzes : [];
        
        return quizzes.id
          ? updatedQuizzes.map((quiz) => (quiz.id === quizzes.id ? { ...newQuiz, id: newQuizRef.key } : quiz))
          : [...updatedQuizzes, { ...newQuiz, id: newQuizRef.key }];
      });
  
      setShowModal({ title:'Success' ,visible: true, message: 'Quiz saved successfully!', type: 'success' });
      
    } catch (error) {
      setShowModal({
        title: 'Fail',
        visible: true,
        message: 'Failed to save quiz. Please try again.',
        type: 'error'
      });
      console.error('Save quiz failed:', error);
    }
  };
  

  const handleModalConfirm = () => {
    if (showModal.type === 'confirm' || showModal.type === 'success') {
      route('/welcome'); // Change this path to the one you want to redirect to
    }
    setShowModal({ visible: false, message: '', type: '' });
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
        <div id="questions-list" className="mb-4 w-1/2">
          {questions.map((question, index) => (
            <div key={index} className="mb-4 bg-blue-200 p-4 border border-black rounded shadow">
              <label 
                onClick={() => removeQuestion(index)} 
                className="block text-right text-red-500 hover:text-red-700 font-bold mb-2 ml-2">
                Cancel
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
            type="button"
            onClick={handleBackClick}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg"
          >
            Back
          </button>
        </div>
      </form>

      {/* Modal for displaying messages */}
      {showModal.visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-black shadow-lg">
            <h2 className="text-xl font-bold mb-4">{showModal.type === 'confirm' ? 'Are you sure?' : showModal.title}</h2>
            <p className="mb-4">{showModal.message}</p>
            <div className="flex justify-between">
              {showModal.type === 'confirm' ? (
                <>
                  <button
                    onClick={() => setShowModal({ visible: false, message: '', type: '' })}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleModalConfirm}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Yes, Go Back
                  </button>
                </>
              ) : (
                <div className="flex justify-center w-full">
                  <button
                    onClick={handleModalConfirm}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                  >
                    OK
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizForm;
