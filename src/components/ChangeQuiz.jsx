import { useState, useEffect } from 'preact/hooks';
import { useGlobal } from '/src/context/GlobalContext'; 
import { route } from 'preact-router';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';
import QuizForm from './QuizForm'; // Import QuizForm



const ChangeQuiz = ({ quizId }) => {
  const { state } = useGlobal();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    if (!state.GlobalVarIsLoggedIn) {
      route('/');
    }
  }, [state.GlobalVarIsLoggedIn]);

  useEffect(() => {
    const fetchQuiz = () => {
      const quizRef = ref(database, `quizzes/${quizId}`);
      onValue(quizRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setQuiz({ ...data, id: quizId });
        }
      });
    };

    fetchQuiz();
  }, [quizId]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Quiz</h2>
      <QuizForm  quizId={quizId} quizzes={quiz} setQuizzes={setQuiz}  />
    </div>
  );
};

export default ChangeQuiz;
