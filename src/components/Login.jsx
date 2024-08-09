
//file name : Login.jsx
import { signInWithGoogle } from '/src/auth';
import { route } from 'preact-router';
import { useGlobal } from '/src/context/GlobalContext';
import { useState, useEffect } from 'preact/hooks';



const Login = ({profilePhoto}) => {
  const { state, setState } = useGlobal();

  useEffect(() => {
    // Check if the user is logged in and redirect if so
    if (state.GlobalVarIsLoggedIn) {
      route('/welcome');
    }
  }, [state.GlobalVarIsLoggedIn]);

  const handleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      window.LOGEDIN=true
      //update the global varible in the globalcontext.jsx to the new values 
      setState(prevState => ({
        ...prevState,
        GlobalVarIsLoggedIn:true,
        GlobalVarUserEmail:result.email,
        GlobalVarprofilePhotoUrl: result.photoURL
      }));
    
     
      route('/welcome'); // Redirect to the welcome page after sign-in
    } catch (error) {
      console.error("Sign-in failed", error);
    }
  };

  const handlePlayClick = () => {
    route('/main'); // Redirect to the play quizzes page
  };

  const handleCreateClick = () => {
    route('/create'); // Redirect to the create quiz page
  };

  const handleEditClick = () => {
    route('/edit'); // Redirect to the edit quiz page
  };

  return (
    <div class="">
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl mb-8 shimmer">Login or Sign Up with Google</h1>
      <div className="flex flex-col items-center mb-6">
        <button
          onClick={handlePlayClick}
          className="bg-green-400 hover:bg-green-500 text-white font-bold py-6 px-10 rounded-2xl shadow-lg mb-6 transition duration-500"
        >
          Play Quizzes
        </button>
      </div>
      <button onClick={handleSignIn} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-6 px-9 rounded-2xl transition duration-500">
        Sign in with Google
      </button>
    </div>
    </div>
  );
};

export default Login;
