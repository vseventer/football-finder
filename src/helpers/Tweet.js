// Package modules.
import moment  from 'moment';
import React   from 'react';
import twitter from 'twitter-text';

// Local modules.
import './tweet.css';

// Component.
class Tweet extends React.Component {
  // Parses entities (hashtags, mentions, etc.) from specified tweet.
  parseTweet(tweet) {
    var text = twitter.autoLink(tweet.text, {
      urlEntities: tweet.entities.urls
    });
    return { __html: text };
  }

  render() {
    var data = this.props.data;
    var date = moment(data.created_at).format('D MMMM YYYY, HH:mm'); // Format: 2 January 2006, 16:21.

    // Display first photo (if any).
    var media = null;
    if(null != data.entities.media && 'photo' === data.entities.media[0].type) {
      media = <img alt="media" className="media" src={data.entities.media[0].media_url_https} />;
    }

    return (
      <div>
        <p dangerouslySetInnerHTML={this.parseTweet(data)}></p>
        {media}
        <ul className="metadata">
          <li>
            <a href={`https://twitter.com/` + data.user.screen_name}>@{data.user.screen_name}</a>
          </li>
          <li>
            <a href={`https://twitter.com/` + data.user.screen_name + '/status/' + data.id_str}>{date}</a>
          </li>
          <li>
            <a href={`https://twitter.com/intent/retweet?tweet_id=` + data.id_str}>Retweet</a>
          </li>
          <li>
            <a href={`https://twitter.com/intent/like?tweet_id=` + data.id_str}>Like</a>
          </li>
        </ul>
      </div>
    );
  }
}

// Exports.
export default Tweet;