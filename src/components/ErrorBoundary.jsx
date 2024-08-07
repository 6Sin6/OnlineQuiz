//import { h } from 'preact';
import { Component } from 'preact/compat'; // Ensure this is installed

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, info);

    // Automatically reload the page
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      // You can choose to render nothing or a simple fallback UI
      return null;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
