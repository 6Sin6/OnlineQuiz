// auth.js - Handles Google Sign-In

// Import the necessary Firebase modules and methods
import { auth } from './firebase'; // Import the Firebase authentication instance from firebase.js
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Initialize the Google Auth provider
const provider = new GoogleAuthProvider();

/**
 * Signs in the user with Google using a popup window.
 * 
 * @returns {Promise<User>} A promise that resolves with the authenticated user object
 *                           when the sign-in is successful, or rejects with an error if it fails.
 */
const signInWithGoogle = () => {
  // Attempt to sign in using the GoogleAuthProvider and a popup window
  return signInWithPopup(auth, provider)
    .then((result) => {
      console.clear(); // Clear the console on successful sign-in
      return result.user; // Return the user object from the sign-in result
    })
    .catch((error) => {
      console.error(error); // Log any errors that occur during the sign-in process
      throw error; // Rethrow the error to allow the caller to handle it
    });
};

// Export the signInWithGoogle function for use in other parts of the application
export { signInWithGoogle };
