//import { h } from 'preact';

const Header = ({ userEmail, darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <div className="header-content flex justify-between items-center w-full">
        <span>{userEmail || 'Guest'} </span>
        <button className="dark-mode-toggle rounded-xl" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
