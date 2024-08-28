import { route } from 'preact-router';
import { useState, useEffect } from 'preact/hooks';
import { ref, onValue } from 'firebase/database';
import { database } from '../DBcontroller/firebase'; // Import database from firebase.js
import { useGlobal } from '/src/context/GlobalContext'; // Import the global context

const QuizList = ({ quizzes }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highScores, setHighScores] = useState({});
  const { state } = useGlobal(); // Access the global state

  // Effect to check the mode from local storage and set dark mode
  useEffect(() => {
    const mode = localStorage.getItem('mode');
    setIsDarkMode(mode === 'dark');
  }, []);

  // Function to handle the back button click
  const handleBackClick = () => {
    if (window.LOGEDIN) {
      route('/welcome'); // Redirect to welcome page if logged in
    } else {
      route('/'); // Redirect to home page if not logged in
    }
  };

  // Function to handle quiz play button click
  const handlePlayClick = (quizId) => {
    route(`/quiz/${quizId}`); // Navigate to the selected quiz
  };

  // Function to fetch high scores from Firebase
  const fetchHighScores = () => {
    try {
      const resultsRef = ref(database, 'results'); // Reference to the results in Firebase
      onValue(resultsRef, (snapshot) => {
        const data = snapshot.val(); // Get the snapshot data
        if (data) {
          const userHighScores = {};

          // Iterate through results to find high scores for the logged-in user
          Object.keys(data).forEach((resultId) => {
            const result = data[resultId];
            const email = result.user;
            const quizId = result.quizId;
            const score = result.score || 0;

            // Check if the score belongs to the logged-in user
            if (email === state.GlobalVarUserEmail) {
              // Update the high score if it's the highest for that quiz
              if (!userHighScores[quizId] || score > userHighScores[quizId]) {
                userHighScores[quizId] = score;
              }
            }
          });

          setHighScores(userHighScores); // Update the highScores state
        }
      });
    } catch (error) {
      console.error('Fetch high scores failed:', error); // Log any errors
    }
  };

  // Effect to fetch high scores on component mount
  useEffect(() => {
    fetchHighScores(); // Call the fetchHighScores function
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2 className="text-5xl mb-5 shimmer">Select a Quiz to Play</h2>
      <div className="space-y-4">
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <div
              className={`bg-white/[0.2] p-4 rounded shadow-2xl mb-4 text-center ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
              }`}
              key={quiz.id}
            >
              <h3 className="text-2xl font-bold mb-2">{quiz.title}</h3>
              <p className="text-gray-700 mb-4">{quiz.description}</p>
              {quiz.image && (
                <img
                  src={quiz.image}
                  alt={`${quiz.title} image`}
                  className="w-full h-64 object-cover mb-4"
                />
              )}
              <p className="text-lg font-bold">
                High Score: {highScores[quiz.id] !== undefined ? highScores[quiz.id] : 'N/A'}
              </p>
              <button
                onClick={() => handlePlayClick(quiz.id)} // Play quiz button click
                className={`font-bold py-2 px-4 rounded-lg shadow-xl transition duration-500 ${
                  isDarkMode
                    ? 'bg-green-600 hover:bg-green-800 text-white'
                    : 'bg-green-500 hover:bg-green-700 text-white'
                }`}
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
        onClick={handleBackClick} // Back button click
        className={`font-bold py-4 px-8 rounded-lg shadow-lg mt-8 bg-blue-700 hover:bg-blue-900 text-white `}
      >
 
        Back
      </button>
    </div>
  );
};

export default QuizList;