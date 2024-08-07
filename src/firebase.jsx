// firebase.js
import { initializeApp, getApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU319sPwWFhYBlcXkVgEjBbfFU122H1MY",
  authDomain: "online-quiz-11669.firebaseapp.com",
  databaseURL: "https://online-quiz-11669-default-rtdb.firebaseio.com",
  projectId: "online-quiz-11669",
  storageBucket: "online-quiz-11669.appspot.com",
  messagingSenderId: "118557079543",
  appId: "1:118557079543:web:9276249b389978131520f2",
  measurementId: "G-YKDLZZ6S2Z"
};

// Initialize Firebase if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);

let userEmail = ""; // Variable to store the user's email


export { app, database, auth, storage, userEmail };
