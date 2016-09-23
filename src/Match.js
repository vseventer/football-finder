// Package modules.
import jQuery from 'jquery';
import moment from 'moment';
import React  from 'react';
import { hashHistory, Link } from 'react-router';

// Local modules.
import config      from '../config.json';
import MatchDetail from './helpers/MatchDetail';
import Tweet       from './helpers/Tweet';
import './match.css';

// Import mock data in case API lets us down.
import mock from '../mocks/matches.json';

// Component.
class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    // Retrieve data from API.
    var matchId = parseInt(this.props.routeParams.matchId, 10);
    jQuery.get({
      url  : config.api.base + 'matches/' + matchId,
      data : { api_key: config.api.apiKey }
    })
    .done(this.matchHandler.bind(this))
    .fail(function() {
      // API call failed, use mock data instead.
      var match = mock.filter(function(match) {
        return match.dbid === matchId;
      }).shift();

      // Verify match exists.
      if(null == match) {
        return hashHistory.push('/PageNotFound');
      }
      this.matchHandler(match);
    }.bind(this))
  }

  // Handles match data, and retrieves related tweets.
  matchHandler(data) {
    data.tweets = [ ]; // Init.
    this.setState({ data: data }); // Save state.

    // Retrieve related tweets from Twitter.
    var query = [
      data.homeTeam.shortCode + data.awayTeam.shortCode,
      data.homeTeam.name + ' ' + data.awayTeam.name
    ].join(' OR ');
    var until = moment(data.start).add(3, 'days').format('YYYY-MM-DD');

    jQuery.get({
      url  : config.twitter.base + 'search/tweets.json',
      data : { count: config.twitter.count, lang: 'en', q: query, until: until }
    }, function(tweets) {
      data.tweets = JSON.parse(tweets).statuses;
      this.setState({ data: data }); // Update state.
    }.bind(this));
  }

  render() {
    // Initial data is retrieved from API. If data is not there yet, return here.
    var data = this.state.data;
    if(null == data) {
      return null;
    }

    // Render tweets.
    var tweets = data.tweets.map(function(tweet) {
      return (
        <li className="tweet" key={tweet.id}>
          <Tweet data={tweet} />
        </li>
      );
    });

    // Render everything.
    var hashTag = [ data.homeTeam.shortCode, data.awayTeam.shortCode ].join('');
    return (
      <div className="box">
        <h1><Link to={`/`}>Football Finder</Link></h1>
        <MatchDetail data={data} />
        <p className="reply">
          <a href={`https://twitter.com/intent/tweet?hashtags=` + hashTag}>Join The Discussion</a>
        </p>
        <ul className="tweets">{tweets}</ul>
      </div>
    );
  }
}

// Exports.
export default Match;