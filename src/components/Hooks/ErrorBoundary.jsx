// import { h } from 'preact';
// We would typically import `h` from 'preact' to use JSX syntax in Preact, but it is not required in this context, so it's commented out.

import { Component } from 'preact/compat'; // Importing the Component class from 'preact/compat' to create a class-based component similar to how it's done in React.

class ErrorBoundary extends Component {
  // The ErrorBoundary class extends Component, making it a React-like class component in Preact.

  constructor(props) {
    super(props);
    // The constructor initializes the component and sets up its initial state.
    
    this.state = { hasError: false };
    // The initial state includes a single property `hasError` which is set to `false`.
    // This state will be used to track whether an error has occurred in any child component.
  }

  static getDerivedStateFromError() {
    // This lifecycle method is called when an error is thrown in a descendant component.
    
    return { hasError: true };
    // It updates the component's state to reflect that an error has occurred, setting `hasError` to `true`.
    // This will trigger a re-render of the component, allowing it to display a fallback UI or take other actions.
  }

  componentDidCatch(error, info) {
    // This lifecycle method is triggered after an error has been caught.
    // It's where we handle the error, such as logging it to an error reporting service.
    
    console.error("Error caught by ErrorBoundary:", error, info);
    // The error details are logged to the console for debugging purposes.
    
    window.location.reload();
    // The page is automatically reloaded to attempt recovery from the error.
    // This can be useful if the error was due to a transient issue, but it might not be appropriate for all cases.
  }

  render() {
    // The render method determines what should be displayed by the component.
    
    if (this.state.hasError) {
      // If an error has been caught (i.e., `hasError` is `true`), this block is executed.
      
      return null;
      // Returning `null` means the component will render nothing.
      // You could replace this with a custom error message or a different fallback UI.
    }

    return this.props.children;
    // If no error has occurred, the component renders its children normally.
    // This allows the ErrorBoundary to wrap other components and catch any errors they might throw.
  }
}

export default ErrorBoundary;
// The ErrorBoundary class is exported as the default export from this module.
// This allows it to be imported and used in other parts of the application.