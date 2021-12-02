import React, { ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): State {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(`${error} 
    The error is located at: ${errorInfo.componentStack}`);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>We're sorry but something went terribly wrong..</h1>
          <p>
            Try to go back to the <Link to="/">Home page</Link>
          </p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
