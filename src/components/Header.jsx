import { useEffect, useState } from 'preact/hooks';

// The Header component receives four props:
// - darkMode: A boolean indicating whether dark mode is enabled.
// - toggleDarkMode: A function to toggle between dark mode and light mode.
// - profilePhoto: A URL string of the user's profile photo.
// - UserEmail: A string containing the user's email address.

const Header = ({ darkMode, toggleDarkMode, profilePhoto, UserEmail }) => {
  const [userEmail, setUserEmail] = useState('');

  return (
    <header className="header">
      {}
      {/* The header component contains the main header content, including the profile photo, welcome message, and dark mode toggle button. */}
      
      <div className="header-content flex justify-between items-center w-full">
        {/* This div serves as the main container for the header content. */}
        
        <div className="flex items-center">
          {/* This div groups the profile photo and the welcome message together. */}
          
          {profilePhoto && (
            <img
              src={profilePhoto}
              alt="Profile"
              className="rounded-full w-10 h-10 mr-2"
              // If the profilePhoto URL is provided, an img element is rendered.
              // The image is styled as a rounded circle with a width and height of 10 units (using Tailwind CSS classes).
              // The margin to the right (`mr-2`) adds some space between the image and the welcome text.
            />
          )}

          <span id="WelcomeSpan" className="text-xl font-bold">
            Welcome, {UserEmail}
            {/* The user's email is displayed as a welcome message.
                The text is styled with a larger font size (`text-xl`) and bold weight (`font-bold`). */}
          </span>
        </div>
        
        <button className="dark-mode-toggle rounded-xl" onClick={toggleDarkMode}>
          {/* A button is provided to toggle between dark mode and light mode. */}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;