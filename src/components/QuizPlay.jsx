import { useState, useEffect } from 'preact/hooks';
import { useGlobal } from '/src/context/GlobalContext'; 
import { route } from 'preact-router';
import { ref, onValue, push } from 'firebase/database';
import { database } from '../firebase'; // Import database from firebase.js
import confetti from 'canvas-confetti'; // Import the confetti library

const QuizPlay = ({ quizId }) => {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60); // Timer for 1 minute
  const [answers, setAnswers] = useState([]);
  const { state } = useGlobal(); 
  const user=state.GlobalVarUserEmail

  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [score, setScore] = useState(0); // Store score for display
  const [results, setResults] = useState([]); // Store results for display
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  useEffect(() => {
    const quizRef = ref(database, `quizzes/${quizId}`);
    onValue(quizRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setQuiz(data);
      }
    });
  }, [quizId]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleNextQuestion();
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleNextQuestion = () => {
    const updatedAnswers = [...answers, selectedOption];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < (quiz?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected option for next question
      setTimeLeft(60); // Reset timer for next question
    } else {
      const correctAnswers = quiz.questions.map(q => q.correctOption);
      const calculatedScore = updatedAnswers.reduce((score, answer, index) => (
        answer === correctAnswers[index] ? score + 1 : score
      ), 0);

      // Set score and results for the modal
      const resultsArray = quiz.questions.map((question, index) => ({
        question: question.text,
        correctAnswer: question.options[question.correctOption],
        userAnswer: question.options[updatedAnswers[index]], // Store actual user answer text
        isCorrect: updatedAnswers[index] === correctAnswers[index], // Check if the answer is correct
      }));

      setScore(calculatedScore);
      setResults(resultsArray);
      setShowModal(true); // Show modal

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

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleBackClick = () => {
    route('/main');
  };

  const closeModal = () => {
    setShowModal(false);
    route('/main'); // Redirect to main page after closing the modal
  };

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
