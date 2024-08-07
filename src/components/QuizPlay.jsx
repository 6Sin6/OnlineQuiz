import { useState, useEffect } from 'preact/hooks';
import { route } from 'preact-router';
import { ref, onValue, push } from 'firebase/database';
import { database } from '../firebase'; // Import database from firebase.js

const QuizPlay = ({ quizId }) => {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60); // Timer for 1 minute
  const [answers, setAnswers] = useState([]);
let user=window.UserName
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
      const score = updatedAnswers.reduce((score, answer, index) => (
        answer === correctAnswers[index] ? score + 1 : score
      ), 0);

      // Display an alert with the results
      let resultsMessage = `Quiz completed!\nYour score: ${score}/${quiz.questions.length}\n\n`;
      quiz.questions.forEach((question, index) => {
        resultsMessage += `Question ${index + 1}: ${question.text}\n`;
        resultsMessage += `Correct answer: ${question.options[question.correctOption]}\n`;
        resultsMessage += `Your answer: ${question.options[updatedAnswers[index]]}\n\n`;
      });

      alert(resultsMessage);

      // Save the result to Firebase
      const resultRef = ref(database, 'results');
      push(resultRef, {
        user,
        quizId,
        score,
        answers: updatedAnswers,
        timestamp: Date.now()
      });

      route('/main'); // Redirect to main page
    }
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleBackClick = () => {
    route('/main');
  };

  if (!quiz) {
    return <p>Loading quiz...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl mb-5">{quiz.title}</h2>
      <p className="mb-4">{quiz.description}</p>
      <div className="mb-4">
        <h3 className="text-xl mb-2 rounded-xl transition duration-500">Question {currentQuestionIndex + 1}</h3>
        <p>{quiz.questions[currentQuestionIndex]?.text}</p>
        <ul>
          {quiz.questions[currentQuestionIndex]?.options.map((option, index) => (
            <li 
              key={index}
              className={`p-2 cursor-pointer ${selectedOption === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
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
    </div>
  );
};

export default QuizPlay;
