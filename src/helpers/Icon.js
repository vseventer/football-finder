// Package modules.
import React from 'react';

// Local modules.
import './icon.css';

// Component.
class Icon extends React.Component {
  render() {
    return <img alt={this.props.alt} className="icon" src={this.props.src} />;
  }
}

// Exports.
export default Icon;