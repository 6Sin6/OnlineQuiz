//import { h } from 'preact';
import { useState,useEffect } from 'preact/hooks';
import { useGlobal } from '/src/context/GlobalContext'; 
import { route } from 'preact-router';
import { ref, onValue, remove } from 'firebase/database';
import { database } from '../firebase'; // Import database from firebase.js

const EditQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const { state } = useGlobal(); // Access global state (global varibles can be set in /src/context/GlobalContext.jsx)
  useEffect(() => {
    // Check if the user is Not logged in and redirect if so 
    if (!state.GlobalVarIsLoggedIn) {
      route('/');
    }
  }, [state.GlobalVarIsLoggedIn]);
  
  useEffect(() => {
    const fetchQuizzes = () => {
      const quizzesRef = ref(database, 'quizzes');
      onValue(quizzesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setQuizzes(Object.keys(data).map(key => ({ ...data[key], id: key })));
        } else {
          setQuizzes([]);
        }
      });
    };

    fetchQuizzes();
  }, []);

  const handleBackClick = () => {
    route('/welcome');
  };

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this quiz?");
  if (confirmDelete) {
    try {
      const quizRef = ref(database, `quizzes/${id}`);
      await remove(quizRef);
      setQuizzes(quizzes.filter(quiz => quiz.id !== id));
    } catch (error) {
      console.error('Failed to delete quiz:', error);
    }
  } else {
    console.log('Quiz deletion canceled');
  }
  };
  

  const handleEdit = (quizId) => {
    route(`/change-quiz/${quizId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-5xl mb-5 shimmer">Edit Quizzes</h2>
      {quizzes.length > 0 ? (
        <div className="w-full max-w-lg mx-auto">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white/[0.2] p-4 rounded shadow-2xl mb-4"
            >
              <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
              <p className="mb-2">{quiz.description}</p>
              <button
                onClick={() => handleEdit(quiz.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-2 transition duration-500 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(quiz.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl mt-2 transition duration-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No quizzes available.</p>
      )}
      <button
        onClick={handleBackClick}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Back
      </button>
    </div>
  );
};

export default EditQuiz;
