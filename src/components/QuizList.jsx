//import { h } from 'preact';
import { route } from 'preact-router';
import { useState, useEffect } from 'preact/hooks';

const QuizList = ({ quizzes }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem('mode');
    setIsDarkMode(mode === 'dark');
  }, []);

  const handleBackClick = () => {
    if(window.LOGEDIN){
    route('/welcome');
    }
    else{
      route('/');
    }
  };

  const handlePlayClick = (quizId) => {
    route(`/quiz/${quizId}`);
  };

  return (
    <div className={`flex flex-col items-center justify-center  ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2 className="text-5xl mb-5 shimmer">Select a Quiz to Play</h2>
      <div className="space-y-4">
        {quizzes.length > 0 ? (
          quizzes.map(quiz => (
            <div className={`bg-white/[0.2] p-4 rounded shadow-2xl mb-4 text-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} key={quiz.id}>
              <h3 className="text-2xl font-bold mb-2">{quiz.title}</h3>
              <p className="text-gray-700 mb-4">{quiz.description}</p>
              {quiz.image && (
                <img
                  src={quiz.image}
                  alt={`${quiz.title} image`}
                  className="w-full h-64 object-cover mb-4"
                />
              )}
              <button
                onClick={() => handlePlayClick(quiz.id)}
                className={`font-bold py-2 px-4 rounded-lg shadow-xl transition duration-500 ${isDarkMode ? 'bg-green-600 hover:bg-green-800 text-white' : 'bg-green-500 hover:bg-green-700 text-white'}`}
              >
                Play Quiz
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No quizzes available.</p>
        )}
      </div>
      <button
        onClick={handleBackClick}
        className={`font-bold py-4 px-8 rounded-lg shadow-lg mt-8 ${isDarkMode ? 'bg-red-600 hover:bg-red-800 text-white' : 'bg-red-500 hover:bg-red-700 text-white'}`}
      >
        Back
      </button>

    </div>
  );
};

export default QuizList;
