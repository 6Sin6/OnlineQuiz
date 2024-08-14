import { Router } from 'preact-router';
import { useState, useEffect } from 'preact/hooks';
import { useGlobal } from '/src/context/GlobalContext'; // Import useGlobal hook for accessing global variables
import QuizMenu from './QuizMenu';
import QuizList from './QuizList';
import QuizForm from './QuizForm';
import QuizPlay from './QuizPlay';
import ChangeQuiz from './ChangeQuiz';
import Login from './Login';
import EditQuiz from './EditQuiz';
import './App.css';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase'; // Import Firebase database instance
import { auth } from '../firebase'; // Import Firebase authentication
import Footer from './Footer';
import Header from './Header';

const App = () => {
  // State to store the list of quizzes fetched from the database
  const [quizzes, setQuizzes] = useState([]);
  
  // State to manage the current theme (dark mode or light mode)
  const [darkMode, setDarkMode] = useState(false);
  
  // State to store the profile photo URL (fetched from global context)
  const [profilePhoto, setProfilePhoto] = useState('');
  
  // Access global state for profile photo URL and user email
  const { state } = useGlobal();

  // useEffect hook to fetch quizzes from the database when the component mounts
  useEffect(() => {
    const fetchQuizzes = () => {
      try {
        const quizzesRef = ref(database, 'quizzes'); // Reference to the 'quizzes' node in the Firebase database
        onValue(quizzesRef, (snapshot) => {
          const data = snapshot.val(); // Retrieve the data from the snapshot
          if (data) {
            // Map the data to include an 'id' field for each quiz and update the state
            setQuizzes(Object.keys(data).map(key => ({ ...data[key], id: key })));
          }
        });
      } catch (error) {
        console.error('Fetch quizzes failed:', error); // Log an error if fetching quizzes fails
      }
    };

    fetchQuizzes(); // Call the fetchQuizzes function
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Function to toggle between dark mode and light mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode); // Toggle the dark mode state
    document.body.classList.toggle('dark-mode', !darkMode); // Toggle the dark mode class on the body element
  };

  // Handle the user login process
  const handleLogin = () => {
    window.location.reload(); // Reload the page after login due to a known bug
  };

  // Handle the user logout process
  const handleLogout = () => {
    auth.signOut().then(() => {
      window.location.reload(); // Reload the page after logout
    });
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Header component with dark mode toggle, logout function, and profile photo */}
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onLogout={handleLogout}
        profilePhoto={state.GlobalVarprofilePhotoUrl} 
        UserEmail={state.GlobalVarUserEmail}
      />
      
      {/* Router to handle navigation between different components */}
      <Router>
        <Login path="/" onLogin={handleLogin} />
        <EditQuiz path="/edit" />
        <QuizForm path="/create" quizzes={quizzes} setQuizzes={setQuizzes} />
        <QuizMenu path="/welcome" />
        <QuizList path="/main" quizzes={quizzes} />
        <QuizPlay path="/quiz/:quizId" />
        <ChangeQuiz path="/change-quiz/:quizId"/>
      </Router>
      
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default App;