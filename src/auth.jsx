// auth.js used to handle sign in with google
import { auth } from './firebase'; // Import auth from firebase.jsx
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      return result.user; // Return the user result
    })
    .catch((error) => {
      console.error(error);
      throw error; // Rethrow the error to be handled by the caller
    });
};

export { signInWithGoogle };
