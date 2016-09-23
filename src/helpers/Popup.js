// Package modules.
import React           from 'react';
import { hashHistory } from 'react-router';

// Local modules.
import MatchDetail from './MatchDetail';

// Component.
class Popup extends React.Component {
  render() {
    var data = this.props.data;

    // @see https://github.com/ReactTraining/react-router/blob/master/docs/guides/NavigatingOutsideOfComponents.md
    var href = hashHistory.createHref('/match/' + data.dbid);

    return (
      <div>
        <MatchDetail data={data} />
        <p>
          <a href={href}>Join the Discussion</a>
        </p>
      </div>
    );
  }
}

// Exports.
export default Popup;