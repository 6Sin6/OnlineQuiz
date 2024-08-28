import { useState, useEffect } from 'preact/hooks';
import { useGlobal } from '/src/context/GlobalContext'; // Import useGlobal hook for accessing global variables
import { route } from 'preact-router'; // Import route for navigation
import { ref, onValue } from 'firebase/database';
import { database } from '../DBcontroller/firebase'; // Import Firebase database instance
import QuizForm from './QuizForm'; // Import QuizForm component

const ChangeQuiz = ({ quizId ,darkMode}) => {
  const { state } = useGlobal(); // Access global state variables
  const [quiz, setQuiz] = useState(null); // State to store the quiz data fetched from the database

  // useEffect hook to check if the user is logged in
  useEffect(() => {
    if (!state.GlobalVarIsLoggedIn) {
      route('/'); // Redirect to the home page if the user is not logged in
    }
  }, [state.GlobalVarIsLoggedIn]); // Dependency array ensures this effect runs when the login state changes

  // useEffect hook to fetch the specific quiz data based on quizId
  useEffect(() => {
    const fetchQuiz = () => {
      const quizRef = ref(database, `quizzes/${quizId}`); // Reference to the specific quiz in the database
      onValue(quizRef, (snapshot) => {
        const data = snapshot.val(); // Retrieve the quiz data from the snapshot
        if (data) {
          setQuiz({ ...data, id: quizId }); // Set the quiz data including the quizId
        }
      });
    };

    fetchQuiz(); // Call the fetchQuiz function to retrieve the data
  }, [quizId]); // Dependency array ensures this effect runs when quizId changes

  // If the quiz data hasn't been loaded yet, display a loading message
  if (!quiz) {
    return <div>Loading...</div>;
  }

  // Render the QuizForm component with the quiz data to edit
  return (
    <div>
      <h2>Edit Quiz</h2>
      <QuizForm quizId={quizId} quizzes={quiz} setQuizzes={setQuiz} darkMode={darkMode} />
    </div>
  );
};

export default ChangeQuiz;