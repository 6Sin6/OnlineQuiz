import { useEffect, useState } from 'preact/hooks';


const Header = ({ darkMode, toggleDarkMode,profilePhoto,UserEmail }) => {
  const [userEmail, setUserEmail] = useState('');
  
  return (
    <header className="header">
      <div className="header-content flex justify-between items-center w-full">
        <div className="flex items-center">
          {profilePhoto && (
            <img
              src={profilePhoto}
              alt="Profile"
              className="rounded-full w-10 h-10 mr-2" // Adjust size as needed
            />
          )}
      

        <span id="WelcomeSpan" className="text-xl font-bold">Welcome, {UserEmail}</span>
        </div>
        <button className="dark-mode-toggle rounded-xl" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
