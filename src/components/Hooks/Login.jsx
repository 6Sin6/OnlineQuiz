// File name: Login.jsx
import { signInWithGoogle } from '../DBcontroller/auth'; // Import function to handle Google sign-in
import { route } from 'preact-router'; // Import routing function for navigation
import { useGlobal } from '/src/context/GlobalContext'; // Import custom hook for global state management
import { useState, useEffect } from 'preact/hooks'; // Import hooks for managing state and side effects

// Define the Login component
const Login = ({ profilePhoto }) => {
  const { state, setState } = useGlobal(); // Access global state and setter function

  // Effect to redirect logged-in users
  useEffect(() => {
    // Check if the user is logged in and redirect if so
    if (state.GlobalVarIsLoggedIn) {
      route('/welcome'); // Navigate to the welcome page if logged in
    }
  }, [state.GlobalVarIsLoggedIn]); // Dependency array includes login state

  // Function to handle Google sign-in
  const handleSignIn = async () => {
    try {
      const result = await signInWithGoogle(); // Attempt to sign in with Google
      window.LOGEDIN = true; // Set a global variable to indicate user is logged in

      // Update the global state with user information
      setState(prevState => ({
        ...prevState, // Spread previous state
        GlobalVarIsLoggedIn: true, // Set login status to true
        GlobalVarUserEmail: result.email, // Store user's email
        GlobalVarprofilePhotoUrl: result.photoURL // Store user's profile photo URL
      }));

      route('/welcome'); // Redirect to the welcome page after sign-in
    } catch (error) {
      console.error("Sign-in failed", error); // Log any errors during sign-in
    }
  };

  // Function to navigate to the play quizzes page
  const handlePlayClick = () => {
    route('/main'); // Navigate to the main quizzes page
  };

  // Function to navigate to the create quiz page
  const handleCreateClick = () => {
    route('/create'); // Navigate to the create quiz page
  };

  // Function to navigate to the edit quiz page
  const handleEditClick = () => {
    route('/edit'); // Navigate to the edit quiz page
  };

  // Render the login component UI
  return (
    <div className="m-40">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl mb-8 shimmer">Online Quiz</h1> {/* Main heading */}
        <div className="flex flex-col items-center mb-6">
          <button
            onClick={handlePlayClick} // Navigate to play quizzes on click
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-6 px-10 rounded-2xl shadow-lg mb-6 transition duration-500"
          >
            Play Quizzes
          </button>
        </div>
        <button
          onClick={handleSignIn} // Trigger sign-in with Google on click
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-6 px-9 rounded-2xl transition duration-500"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;