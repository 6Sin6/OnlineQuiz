// firebase.js - Configures and initializes Firebase services

import { initializeApp, getApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration object containing the project's settings
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

// Initialize Firebase application
// Check if Firebase has already been initialized to prevent duplicate initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Retrieve and export Firebase services
const database = getDatabase(app); // Access the Firebase Realtime Database
const auth = getAuth(app); // Access Firebase Authentication
const storage = getStorage(app); // Access Firebase Cloud Storage


// Export the initialized Firebase app and services
export { app, database, auth, storage };
