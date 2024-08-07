//import { h } from 'preact';
import { route } from 'preact-router';

const QuizMenu = () => {
  const handlePlayClick = () => {
    route('/main'); // Ensure this path matches the route in App.js
  };

  const handleCreateClick = () => {
    route('/create'); // Ensure this path matches the route in App.js
  };
  
  const handleEditClick = () => {
    route('/edit'); // Ensure this path matches the route in App.js
  };

  const logOut =  () =>{
    window.LOGEDIN=false
    window.UserName="Guest"
    route('/');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl mb-10 shimmer">Welcome to the Online Quiz System</h1>
      <div className="flex flex-col items-center">
        <button
          onClick={handlePlayClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-10 rounded-xl shadow-lg mb-5 transition duration-500"
        >
          Play Quizzes
        </button>
        <button
          onClick={handleCreateClick}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-10 rounded-xl shadow-lg mb-5 transition duration-500"
        >
          Create Quiz
        </button>
        <button
          onClick={handleEditClick}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-6 px-12 rounded-xl shadow-lg mb-5 transition duration-500"
        >
          Edit Quiz
        </button>

        <button
          onClick={logOut}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-6 px-12 rounded-xl shadow-lg mb-5 transition duration-500"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default QuizMenu;
