import { useState, useEffect } from 'preact/hooks';
import { useGlobal } from '/src/context/GlobalContext'; 
import { route } from 'preact-router';
import { ref, onValue, push } from 'firebase/database';
import { database } from '../firebase'; // Import the database from firebase.js
import confetti from 'canvas-confetti'; // Import the confetti library

const QuizPlay = ({ quizId }) => {
  // Local state management
  const [quiz, setQuiz] = useState(null); // Stores the quiz data
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracks the current question index
  const [selectedOption, setSelectedOption] = useState(null); // Tracks the selected answer option
  const [timeLeft, setTimeLeft] = useState(60); // Timer state, set to 1 minute for each question
  const [answers, setAnswers] = useState([]); // Stores user answers
  const { state } = useGlobal(); 
  const user = state.GlobalVarUserEmail; // Retrieves the logged-in user's email

  // Additional state for UI/UX
  const [showModal, setShowModal] = useState(false); // Modal visibility state for showing results
  const [score, setScore] = useState(0); // Stores the quiz score
  const [results, setResults] = useState([]); // Stores detailed results for each question
  const [isDarkMode, setIsDarkMode] = useState(false); // Tracks whether dark mode is enabled

  // Fetches the quiz data from Firebase based on quizId
  useEffect(() => {
    const quizRef = ref(database, `quizzes/${quizId}`);
    onValue(quizRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setQuiz(data);
      }
    });
  }, [quizId]);

  // Timer logic that decrements the time left every second
  useEffect(() => {
    if (timeLeft <= 0) {
      handleNextQuestion(); // Automatically move to the next question when time runs out
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer); // Clear the timer when the component is unmounted or timeLeft changes
    }
  }, [timeLeft]);

  // Handles moving to the next question or ending the quiz
  const handleNextQuestion = () => {
    const updatedAnswers = [...answers, selectedOption];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < (quiz?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Go to the next question
      setSelectedOption(null); // Reset the selected option
      setTimeLeft(60); // Reset the timer
    } else {
      // Calculate the score by comparing user answers with correct answers
      const correctAnswers = quiz.questions.map(q => q.correctOption);
      const calculatedScore = updatedAnswers.reduce((score, answer, index) => (
        answer === correctAnswers[index] ? score + 1 : score
      ), 0);

      // Generate results for each question
      const resultsArray = quiz.questions.map((question, index) => ({
        question: question.text,
        correctAnswer: question.options[question.correctOption],
        userAnswer: question.options[updatedAnswers[index]],
        isCorrect: updatedAnswers[index] === correctAnswers[index],
      }));

      // Update the state with score and results, and show the modal
      setScore(calculatedScore);
      setResults(resultsArray);
      setShowModal(true);

      // Show confetti if the user gets all answers correct
      if (calculatedScore === quiz.questions.length) {
        confetti({
          particleCount: 500,
          spread: 180,
          origin: { y: 0.6 }
        });
      }

      // Save the quiz result to Firebase
      const resultRef = ref(database, 'results');
      push(resultRef, {
        user,
        quizId,
        score: calculatedScore,
        answers: updatedAnswers,
        timestamp: Date.now()
      });
    }
  };

  // Handles option selection by the user
  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  // Navigates back to the main page
  const handleBackClick = () => {
    route('/main');
  };

  // Closes the results modal and navigates back to the main page
  const closeModal = () => {
    setShowModal(false);
    route('/main');
  };

  // Renders the quiz or a loading message if the quiz data is not yet available
  if (!quiz) {
    return <p>Loading quiz...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl mb-5 shimmer">{quiz.title}</h2>
      <p className="mb-4">{quiz.description}</p>
      <div className="mb-4">
        <h3 className="text-xl mb-2 font-bold">Question {currentQuestionIndex + 1}</h3>
        <p className="mb-3">{quiz.questions[currentQuestionIndex]?.text}</p>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          {quiz.questions[currentQuestionIndex]?.options.map((option, index) => (
            <li 
              key={index}
              className={`p-6 cursor-pointer rounded-lg border-2 transition duration-300
                ${selectedOption === index ? 'bg-green-500 text-white border-black' : 
                  selectedOption === null && index === selectedOption ? 'bg-blue-200 text-black border-black' : 
                  'bg-blue-300 text-black border-black hover:bg-blue-500 hover:text-white'}`} // Changed hover color to blue
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <p>Time left: {timeLeft} seconds</p>
      </div>
      <button 
        onClick={handleNextQuestion} 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition duration-500"
        disabled={selectedOption === null} // Disable next button until an option is selected
      >
        Next Question
      </button>
      <button 
        onClick={handleBackClick} 
        className="mt-5 bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition duration-500"
      >
        Back
      </button>

      {/* Custom Modal for Results */}
      {showModal && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <div className="bg-blue-50 rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-center mb-4 text-black">Results</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-blue-50 border border-black">
                <thead>
                  <tr>
                    <th className="py-2 border border-black text-center font-bold text-black">Question</th>
                    <th className="py-2 border border-black text-center font-bold text-black">Correct Answer</th>
                    <th className="py-2 border border-black text-center font-bold text-black">Your Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4 border text-left border-black text-black">{result.question}</td>
                      <td className="py-4 border border-black text-black">{result.correctAnswer}</td>
                      <td className={`py-4 border border-black font-bold text-black ${result.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                        {result.userAnswer} {/* Display the actual answer text */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold text-black">Your Score: {score}/{quiz.questions.length}</p>
              <button 
                onClick={closeModal}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
              >
                Thank You!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizPlay;
