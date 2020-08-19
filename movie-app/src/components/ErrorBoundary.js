import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    //logErrorToMyService(error, errorInfo);
    console.log("Error occured: " +  error + " Error info: " + errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div className="error"><h2>An error occured</h2></div>;
    }

    return this.props.children;
  }
}
