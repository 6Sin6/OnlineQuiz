/*Footer.jsx*/

const Footer = () => {
  // This defines a functional component named `Footer`.

  return (
    // The `return` statement specifies what the component should render.
    <footer className="footer">
      {/* The `footer` element is a semantic HTML element that represents the footer of a document or section. */}
      
      <div className="footer-content">
        {/* This `div` serves as a container for the content within the footer. The `footer-content` class can be used for styling. */}
        
        &copy; {new Date().getFullYear()} Ort Braude. All rights reserved.
        {/* This line displays a copyright symbol followed by the current year and the text "Ort Braude. All rights reserved."
            The current year is dynamically generated using `new Date().getFullYear()`. */}
        
        <p></p>
        {/* This empty `p` tag might be intended as a placeholder or could be removed if not needed. */}
      </div>
    </footer>
  );
};

export default Footer;
// The `Footer` component is exported as the default export from this module.
// This allows it to be imported and used in other parts of the application.