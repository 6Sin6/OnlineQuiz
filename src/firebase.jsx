// firebase.js
import { initializeApp, getApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Firebase configuration
const firebaseConfig = {
  
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "fallbackApiKey",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "fallbackAuthDomain",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://fallback.firebaseio.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "fallbackProjectId",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "fallbackStorageBucket",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "fallbackMessagingSenderId",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "fallbackAppId",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "fallbackMeasurementId"
};


// Initialize Firebase if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);

let userEmail = ""; // Variable to store the user's email


export { app, database, auth, storage, userEmail };
