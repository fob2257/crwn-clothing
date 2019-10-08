import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './ErrorBoundary.styes';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  };

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  };

  componentDidCatch(error, info) {
    console.error(error);
  };

  render() {
    return (this.state.hasErrored) ? (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl='https://i.imgur.com/g3hgqe8.png' />
        <ErrorImageText>
          Sorry this page is broken
        </ErrorImageText>
      </ErrorImageOverlay>
    ) : this.props.children;
  };
};

export default ErrorBoundary;
