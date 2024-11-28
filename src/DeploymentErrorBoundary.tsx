import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class DeploymentErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  // Lifecycle method to update state when an error is thrown
  static getDerivedStateFromError(_error: any): ErrorBoundaryState {
    return { hasError: true };
  }

  // Lifecycle method to log the error details and handle specific error conditions
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Check if the error message matches specific conditions for reloading the page
    if (
      error.message.includes(
        'Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec'
      ) ||
      error.message.includes('assets/index-')
    ) {
      // Reload the page if the error message matches
      window.location.reload();
    }
    // Optional: Log or handle other error conditions here if needed
    console.error('Error boundary caught an error:', error, errorInfo);
  }

  // Render method to show fallback UI or children components
  render(): ReactNode {
    if (this.state.hasError) {
      // Optionally, display an error message or fallback UI
      return <h1>Something went wrong. Reloading the page...</h1>;
    }

    // Render the children components if no error occurred
    return this.props.children;
  }
}

export default DeploymentErrorBoundary;
