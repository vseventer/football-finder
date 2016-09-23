// Package modules.
import moment from 'moment';
import React  from 'react';

// Local modules.
import Icon from './Icon';
import './match-detail.css';

// Component.
class MatchDetail extends React.Component {
  render() {
    var data = this.props.data,
        date = moment(data.start).format('D MMMM YYYY'); // Format: 2 January 2006.

    return (
      <div>
        <h2>
          {data.competition.name} <Icon src={data.competition.flagUrl} />
        </h2>
        <p className="text-center">{date} • {data.venue.name}</p>
        <table>
          <tbody>
            <tr>
              <td className="text-center"><Icon src={data.homeTeam.shirtUrl} /></td>
              <td><strong>{data.homeTeam.name}</strong></td>
              <td className="text-center"><strong>{data.homeGoals}</strong></td>
            </tr>
            <tr>
              <td className="text-center"><Icon src={data.awayTeam.shirtUrl} /></td>
              <td><strong>{data.awayTeam.name}</strong></td>
              <td className="text-center"><strong>{data.awayGoals}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// Exports.
export default MatchDetail;