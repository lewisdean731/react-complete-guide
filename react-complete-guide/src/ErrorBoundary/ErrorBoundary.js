import React, {Component} from 'react';
import classes from './ErrorBoundary.module.css'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentdidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error});
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
