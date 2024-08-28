import { useState, useEffect } from 'preact/hooks';
import { useGlobal } from '/src/context/GlobalContext';
import { route } from 'preact-router';
import { ref, onValue, remove } from 'firebase/database';
import { database } from '../DBcontroller/firebase';

const EditQuiz = () => {
  // State to hold the quizzes
  const [quizzes, setQuizzes] = useState([]);
  // Access global state
  const { state } = useGlobal();
  // State to manage the modal visibility and messages
  const [showModal, setShowModal] = useState({ visible: false, message: '', type: '' });

  // Redirect to home if user is not logged in
  useEffect(() => {
    if (!state.GlobalVarIsLoggedIn) {
      route('/');
    }
  }, [state.GlobalVarIsLoggedIn]);

  // Fetch quizzes from Firebase on component mount
  useEffect(() => {
    const fetchQuizzes = () => {
      const quizzesRef = ref(database, 'quizzes');
      onValue(quizzesRef, (snapshot) => {
        const data = snapshot.val();
        // If quizzes exist, set the quizzes state with their data
        if (data) {
          setQuizzes(Object.keys(data).map(key => ({ ...data[key], id: key })));
        } else {
          // If no quizzes are found, set quizzes to an empty array
          setQuizzes([]);
        }
      });
    };

    fetchQuizzes();
  }, []);

  // Navigate back to the welcome page
  const handleBackClick = () => {
    route('/welcome');
  };

  // Show confirmation modal for quiz deletion
  const handleDelete = async (id) => {
    setShowModal({
      visible: true,
      message: 'Are you sure you want to delete this quiz?',
      type: 'confirm',
      quizId: id,
    });
  };

  // Handle confirmation of quiz deletion
  const handleModalConfirm = async () => {
    const id = showModal.quizId;
    try {
      const quizRef = ref(database, `quizzes/${id}`);
      // Remove the quiz from Firebase
      await remove(quizRef);
      // Update the local quizzes state
      setQuizzes(quizzes.filter(quiz => quiz.id !== id));
      // Close the modal
      setShowModal({ visible: false, message: '', type: '' });
    } catch (error) {
      console.error('Failed to delete quiz:', error);
      // Show error message in modal
      setShowModal({
        visible: true,
        message: 'Failed to delete quiz. Please try again.',
        type: 'error',
      });
    }
  };

  // Navigate to edit quiz page
  const handleEdit = (quizId) => {
    route(`/change-quiz/${quizId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-5xl mb-5 shimmer">Edit Quizzes</h2>
      {quizzes.length > 0 ? (
        <div className="w-full max-w-lg mx-auto">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white/[0.2] p-4 rounded shadow-2xl mb-4">
              <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
              <p className="mb-2">{quiz.description}</p>
              <button
                onClick={() => handleEdit(quiz.id)}
               className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-40 h-10 rounded-xl shadow-lg mb-4 transition duration-500 m-10"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(quiz.id)}
               className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-40 h-10 rounded-xl shadow-lg mb-4 transition duration-500 m-10"
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
        className="bg-blue-600 hover:bg-blue-700 w-40 h-10 text-white font-bold py-2 px-4 rounded-xl mt-4"
      >
        Back
      </button>

      {/* Modal for displaying delete confirmation */}
      {showModal.visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-black shadow-lg">
            <h2 className="text-xl font-bold mb-4">{showModal.type === 'confirm' ? 'Confirmation' : 'Error'}</h2>
            <p className="mb-4">{showModal.message}</p>
            <div className="flex justify-between">
              {showModal.type === 'confirm' ? (
                <>
                  <button
                    onClick={() => setShowModal({ visible: false, message: '', type: '' })}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleModalConfirm}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Yes, Delete
                  </button>
                </>
              ) : (
                <div className="flex justify-center w-full">
                  <button
                    onClick={() => setShowModal({ visible: false, message: '', type: '' })}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                  >
                    OK
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditQuiz;
