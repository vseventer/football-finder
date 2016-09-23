// Package modules.
import jQuery   from 'jquery';
import moment   from 'moment';
import React    from 'react';
import ReactDOM from 'react-dom';

// Local modules.
import config  from '../config.json'
import Icon    from './helpers/Icon';
import Map     from './helpers/Map';
import Popup   from './helpers/Popup';
import './app.css';

// Import mock data in case API lets us down.
import mock from '../mocks/matches.json';

// Component.
class App extends React.Component {
  componentDidMount() {
    // Retrieve data from API.
    jQuery.get({
      url  : config.api.base + 'matches',
      data : {
        competition_ids: [ 2, 11, 42, 44, 45, 55, 72 ].join(','),
        from    : moment().subtract(3, 'days').format(),
        to      : moment().add(4, 'days').format(),
        api_key : config.api.apiKey
      }
    })
    .done(this.matchHandler.bind(this))
    .fail(function() {
      // API call failed, use mock data instead.
      this.matchHandler(mock);
    }.bind(this));
  }

  matchHandler(matches) {
    var map = this.refs.map;

    // Insert matches grouped by competition.
    return matches.reduce(function(hashMap, match) {
      if(null == hashMap[match.competition.dbid]) {
        // Construct group label from React.
        var target = document.createElement('div');
        ReactDOM.render(
          <span>
            <Icon src={match.competition.flagUrl} />&nbsp;
            {match.competition.name}
          </span>,
          target
        );

        // Using innerHTML is a bit dirty, but works for now.
        hashMap[match.competition.dbid] = map.addLayer(target.innerHTML);
      }

      // Add marker to competition layer.
      var position = null != match.venue ? match.venue.geolocation : null;
      if(null != position) {
        map.addMarker(
          [ position.latitude, position.longitude ],
          <Popup data={match} />,
          hashMap[match.competition.dbid]
        );
      }

      return hashMap;
    }, { });
  }

  render() {
    return (
      <div className="box">
        <h1>Football Finder</h1>
        <Map ref="map" />
      </div>
    );
  }
}

// Exports.
export default App;