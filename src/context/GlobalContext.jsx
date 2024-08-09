import { createContext, useContext } from 'preact/compat'; // Use preact/compat for context
import { useState,useEffect } from 'preact/hooks';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem('globalState');
    return savedState ? JSON.parse(savedState) : {
    GlobalVarIsLoggedIn:false,
    GlobalVarUserEmailGuest:"Guest",
    GlobalVarUserEmail:"Guest",
    NophotoUrl:"https://th.bing.com/th/id/OIP.PRyT3WbMgUpQFp8uD_qudQAAAA?rs=1&pid=ImgDetMain",
    GlobalVarprofilePhotoUrl: "https://th.bing.com/th/id/OIP.PRyT3WbMgUpQFp8uD_qudQAAAA?rs=1&pid=ImgDetMain",
  };
});
  useEffect(() => {
    // Save state to localStorage whenever it changes
    localStorage.setItem('globalState', JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
