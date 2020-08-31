import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    console.log('Error occured: ' +  error + ' Error info: ' + errorInfo)
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className='error'>
          <h2>An error occured</h2>
            {this.state.error && this.state.error.toString()}
        </div>
      )
    }

    return this.props.children;
  }
}
