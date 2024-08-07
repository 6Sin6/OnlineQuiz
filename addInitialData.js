import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const initialQuizzes = {
  quiz1: {
    title: "JavaScript Basics",
    description: "Test your knowledge of JavaScript basics.",
    questions: [
      {
        text: "What is the correct syntax for referring to an external script called 'script.js'?",
        options: ["<script src='script.js'>", "<script href='script.js'>", "<script name='script.js'>", "<script file='script.js'>"],
        correctOption: 0
      },
      {
        text: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "create function myFunction()", "function:myFunction()", "def myFunction()"],
        correctOption: 0
      },
      {
        text: "Which operator is used to assign a value to a variable?",
        options: ["=", "==", "===", "!="],
        correctOption: 0
      }
    ]
  },
  quiz2: {
    title: "HTML & CSS",
    description: "Quiz on HTML and CSS fundamentals.",
    questions: [
      {
        text: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HyperText Multiple Language", "HighText Markup Language", "HyperText Markup Link"],
        correctOption: 0
      },
      {
        text: "Which HTML element defines the title of a document?",
        options: ["<title>", "<head>", "<meta>", "<footer>"],
        correctOption: 0
      },
      {
        text: "Which property is used to change the background color in CSS?",
        options: ["background-color", "bg-color", "color", "background"],
        correctOption: 0
      }
    ]
  }
};

const quizzesRef = ref(database, 'quizzes');

set(quizzesRef, initialQuizzes)
  .then(() => {
    console.log("Initial quizzes data added successfully.");
  })
  .catch((error) => {
    console.error("Error adding initial quizzes data:", error);
  });
