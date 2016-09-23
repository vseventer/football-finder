// Package modules.
import React    from 'react';
import { Link } from 'react-router';

// Component.
class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Sorry, this page could not be found.</h1>
        <p className="text-center"><Link to={`/`}>Return Home</Link></p>
      </div>
    );
  }
}

// Exports.
export default PageNotFound;