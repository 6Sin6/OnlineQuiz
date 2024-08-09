import { Router } from 'preact-router';
import { useState, useEffect } from 'preact/hooks';
import { useGlobal } from '/src/context/GlobalContext'; // Import useGlobal hook (used for global varibles) //like storing profile pic url 
import QuizMenu from './QuizMenu';
import QuizList from './QuizList';
import QuizForm from './QuizForm';
import QuizPlay from './QuizPlay';
import ChangeQuiz from './ChangeQuiz';
import Login from './Login';
import EditQuiz from './EditQuiz';
import './App.css';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase'; // Import database from firebase.js
import { auth } from '../firebase'; // Ensure you import auth
import Footer from './Footer';
import Header from './Header';


const App = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState('');
  const { state } = useGlobal(); // Access global state (global varibles can be set in /src/context/GlobalContext.jsx)

  useEffect(() => {
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

    fetchQuizzes();
  }, []);



  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleLogin = () => {
    //because of a bug
    window.location.reload(); // Reload the page after login BUG

  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      window.location.reload(); // Reload the page after logout

    });
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} onLogout={handleLogout}  profilePhoto={state.GlobalVarprofilePhotoUrl} UserEmail={state.GlobalVarUserEmail} />
      <Router>
        <Login path="/" onLogin={handleLogin} />
        <EditQuiz path="/edit" />
        <QuizForm path="/create" quizzes={quizzes} setQuizzes={setQuizzes} />
        <QuizMenu path="/welcome" />
        <QuizList path="/main" quizzes={quizzes} />
        <QuizPlay path="/quiz/:quizId" />
        <ChangeQuiz path="/change-quiz/:quizId"/>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
