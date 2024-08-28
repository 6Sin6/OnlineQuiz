// main.jsx - Entry point for the Preact application

import { render } from 'preact';
import App from './components/App'; // Import the main App component from app.jsx
import './components/styles/index.css'; // Import global CSS styles (Tailwind styles)
import { GlobalProvider } from './context/GlobalContext'; // Import the context provider used for global varibles


// Render the App component inside the GlobalProvider context
render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById('app') // The root element where the app will be mounted
);
