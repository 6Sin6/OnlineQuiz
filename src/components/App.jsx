//import { h } from 'preact';
import { Router } from 'preact-router';
import { useState, useEffect } from 'preact/hooks';
import QuizMenu from './QuizMenu';
import QuizList from './QuizList';
import QuizForm from './QuizForm';
import QuizPlay from './QuizPlay';
import Login from './Login';
import EditQuiz from './EditQuiz';
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase'; // Import database from firebase.js
import { userEmail } from '../firebase'; // Import userEmail

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [quizzes, setQuizzes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  
  useEffect(() => {
    // Check if the user is an admin
    if (userEmail === 'alexsegal666@gmail.com' || userEmail === 'maroun.nasra1997@gmail.com') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [userEmail]);


    // Toggle dark mode
    const toggleDarkMode = () => {
      setDarkMode(prevMode => !prevMode);
    };
  
    // Apply dark mode class to the body
    useEffect(() => {
      document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);


  const fetchQuizzes = () => {
    try {
      const quizzesRef = ref(database, 'quizzes');
      onValue(quizzesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setQuizzes(Object.keys(data).map(key => ({ ...data[key], id: key })));
        }
      });
    } catch (error) {
      console.error('Fetch quizzes failed:', error);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <ErrorBoundary>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <header className="header">
          <div className="header-content">
            <span className="user-email">{userEmail}</span>
            <button className="dark-mode-toggle rounded-xl" onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </header>
        <Router>
          
          <Login path="/" onLogin={handleLogin} />
          <EditQuiz path="/edit" />
          <QuizForm path="/create" quizzes={quizzes} setQuizzes={setQuizzes} />
          <QuizMenu path="/welcome" />
          <QuizList path="/main" quizzes={quizzes} />
          <QuizPlay path="/quiz/:quizId" />
          
        </Router>
        <footer className="footer">
          <div className="footer-content">
            <p>Address: Ort Braude</p>
            <p>Project managers: Alex Segal +972525138630, Maroun Nasra +972504994569</p>
            <p>Project CEOs: Yehuda Bitton +972526794867, Bar Matzliah +972528381763</p>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

export default App;
