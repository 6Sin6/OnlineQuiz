// in the url you see /welcome  thats its route
//import { h } from 'preact';

import { route } from 'preact-router';
import { useState,useEffect,useRef } from 'preact/hooks';
import { useGlobal } from '/src/context/GlobalContext'; // Import useGlobal hook (used for global varibles) //like storing profile pic url 




const QuizMenu = () => {
  const topRef = useRef(null);
  const { state,setState } = useGlobal(); // Access global state (global varibles can be set in /src/context/GlobalContext.jsx)

  useEffect(() => {
    if (topRef.current) {
      console.log('Scrolling to top using ref');
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    // Check if the user is Not logged in and redirect if so 
    if (!state.GlobalVarIsLoggedIn) {
      route('/');
    }
  }, [state.GlobalVarIsLoggedIn]);

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
    //Remove the picture after logout  
    setState(prevState => ({
      ...prevState,
      GlobalVarIsLoggedIn:false,
      GlobalVarUserEmail:state.GlobalVarUserEmailGuest,
      GlobalVarprofilePhotoUrl: state.NophotoUrl
    }));



    route('/');
  };

  return (
    <div ref={topRef} className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl mb-10 shimmer">Online Quiz</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        <button
          onClick={handlePlayClick}//Redirect to the main page
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-10 rounded-xl shadow-lg transition duration-500"
        >
          Play Quizzes
        </button>
        <button
          onClick={handleCreateClick}//Redirect to the create page
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-10 rounded-xl shadow-lg transition duration-500"
        >
          Create Quiz
        </button>
        <button
          onClick={handleEditClick}//Redirect to the edit page
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-6 px-10 rounded-xl shadow-lg transition duration-500"
        >
          Edit Quiz
        </button>
        <button
          onClick={logOut}//Logout
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-6 px-10 rounded-xl shadow-lg transition duration-500"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default QuizMenu;