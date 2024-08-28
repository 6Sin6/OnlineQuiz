import { useState, useEffect } from 'preact/hooks';
import { useGlobal } from '/src/context/GlobalContext'; 
import { route } from 'preact-router';
import { ref, onValue, push } from 'firebase/database';
import { database } from '../DBcontroller/firebase'; // Import database from firebase.js
import confetti from 'canvas-confetti'; // Import the confetti library

const QuizPlay = ({ quizId,darkMode }) => {
  const [quiz, setQuiz] = useState(null); // State to store the current quiz
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Index of the current question
  const [selectedOption, setSelectedOption] = useState(null); // Selected option for the current question
  const [timeLeft, setTimeLeft] = useState(60); // Timer for 1 minute
  const [answers, setAnswers] = useState([]); // Store answers for the quiz
  const { state } = useGlobal(); 
  const user = state.GlobalVarUserEmail; // Get the logged-in user's email

  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [score, setScore] = useState(0); // Store score for display
  const [results, setResults] = useState([]); // Store results for display
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Effect to fetch the quiz data from Firebase when the component mounts or quizId changes
  useEffect(() => {
    const quizRef = ref(database, `quizzes/${quizId}`);
    onValue(quizRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setQuiz(data); // Set the fetched quiz data
      }
    });
  }, [quizId]);

  // Effect to manage the countdown timer and trigger the next question when time runs out
  useEffect(() => {
    if (timeLeft <= 0) {
      handleNextQuestion(); // Move to the next question if time runs out
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1); // Decrement the time left
      }, 1000);
      return () => clearInterval(timer); // Cleanup interval on unmount
    }
  }, [timeLeft]);

  // Function to handle moving to the next question
  const handleNextQuestion = () => {
    const updatedAnswers = [...answers, selectedOption]; // Store the selected option
    setAnswers(updatedAnswers);

    // Check if there are more questions to display
    if (currentQuestionIndex < (quiz?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
      setSelectedOption(null); // Reset selected option for the next question
      setTimeLeft(60); // Reset timer for the next question
    } else {
      // Calculate the score at the end of the quiz
      const correctAnswers = quiz.questions.map(q => q.correctOption);
      const calculatedScore = updatedAnswers.reduce((score, answer, index) => (
        answer === correctAnswers[index] ? score + 1 : score
      ), 0);

      // Prepare results for the modal
      const resultsArray = quiz.questions.map((question, index) => ({
        question: question.text,
        correctAnswer: question.options[question.correctOption],
        userAnswer: question.options[updatedAnswers[index]], // Store actual user answer text
        isCorrect: updatedAnswers[index] === correctAnswers[index], // Check if the answer is correct
      }));

      setScore(calculatedScore); // Set the score state
      setResults(resultsArray); // Set the results for the modal
      setShowModal(true); // Show modal with results

      // Show confetti only if all answers are correct
      if (calculatedScore === quiz.questions.length) {
        confetti({
          particleCount: 500,
          spread: 180,
          origin: { y: 0.6 }
        });
      }

      // Save the result to Firebase
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

  // Function to handle option selection
  const handleOptionClick = (index) => {
    setSelectedOption(index); // Set the selected option
  };

  // Function to handle back button click
  const handleBackClick = () => {
    route('/main'); // Navigate back to the main page
  };

  // Function to close the results modal and navigate back to the main page
  const closeModal = () => {
    setShowModal(false); // Hide the modal
    route('/main'); // Redirect to the main page
  };

  // If quiz data is not yet loaded, display loading message
  if (!quiz) {
    return <p>Loading quiz...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen m-10">
      <h2 className="text-3xl mb-5">{quiz.title}</h2>
      <p className="mb-4">{quiz.description}</p>
      <div className="mb-4">
        <h3 className="text-xl mb-2 font-bold">Question {currentQuestionIndex + 1}</h3>
        <p className="mb-3">{quiz.questions[currentQuestionIndex]?.text}</p>
        <ul className="grid grid-cols-2 gap-4 mt-4">
  {quiz.questions[currentQuestionIndex]?.options.map((option, index) => (
    <li 
      key={index}
      className={`p-4 w-50 h-28 cursor-pointer rounded-lg border-2 flex items-center justify-center text-center transition duration-300 
        ${selectedOption === index ? 'bg-green-500 text-white border-black' : 
          selectedOption === null && index === selectedOption ? 'bg-blue-200 text-black border-black' : 
          'bg-blue-300 text-black border-black hover:bg-blue-500 hover:text-white'}`} // Hover color to blue
      onClick={() => handleOptionClick(index)} // Set the selected option on click
    >
      <span className="whitespace-normal break-words text-sm leading-tight overflow-hidden">{option}</span>
    </li>
  ))}
</ul>



      </div>
      <div className="mb-4">
        <p>Time left: {timeLeft} seconds</p>
      </div>
      <button 
        onClick={handleNextQuestion} 
         className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-40 h-12 rounded-xl shadow-lg mb-4 transition duration-500"
        disabled={selectedOption === null} // Disable next button until an option is selected
      >
        Next Question
      </button>
      <button 
        onClick={handleBackClick} 
        className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-40 h-12 rounded-xl shadow-lg mb-4 transition duration-500"
      >
        Exit Quiz
      </button>

{/* Custom Modal for Results */}
{showModal && (
  <div
    className={`m-1 fixed inset-0 flex flex-col items-center justify-center ${darkMode ? 'bg-gray-600 bg-opacity-75' : 'bg-gray-300 bg-opacity-50'}`}
  >
    <div
      className={`mt-20 mb-1 rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-gray-600 text-white' : 'bg-white text-black'}`}
    >
      <h3 className={`text-2xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Results</h3>
      <div className={`overflow-x-auto ${darkMode ? 'bg-gray-600 text-white' : 'bg-white text-black'}`}>
        <table className={`min-w-full border ${darkMode ? 'border-white' : 'border-black'}`}>
          <thead>
            <tr>
              <th className={`py-2 border ${darkMode ? 'border-white text-white' : 'border-black text-black'} text-center font-bold`}>Question</th>
              <th className={`py-2 border ${darkMode ? 'border-white text-white' : 'border-black text-black'} text-center font-bold`}>Correct Answer</th>
              <th className={`py-2 border ${darkMode ? 'border-white text-white' : 'border-black text-black'} text-center font-bold`}>Your Answer</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className={`border-b ${darkMode ? 'border-white' : 'border-black'}`}>
                <td className={`py-4 border ${darkMode ? 'border-white text-white' : 'border-black text-black'} text-left`}>{result.question}</td>
                <td className={`py-4 border ${darkMode ? 'border-white text-white' : 'border-black text-black'}`}>{result.correctAnswer}</td>
                <td className={`py-4 border ${darkMode ? 'border-white ' : 'border-black text-black'} font-bold ${result.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                  {result.userAnswer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Your Score: {score}/{quiz.questions.length}</p>
        <button
          onClick={closeModal}
          className={` text-white font-bold py-2 px-4 rounded transition duration-500 ${darkMode ? 'text-gray-200 bg-blue-600  hover:bg-blue-700' : 'text-gray-800 bg-blue-500 hover:bg-blue-700'}`}
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
