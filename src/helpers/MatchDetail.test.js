// Package modules.
import { expect }  from 'chai';
import { shallow } from 'enzyme';
import moment      from 'moment';
import React       from 'react';

// Local modules.
import MatchDetail from './MatchDetail';

// Configure.
var mock = {
  competition: {
    name    : 'Competition',
    flagUrl : 'flag.png'
  },
  start     : moment(),
  homeGoals : 3,
  awayGoals : 4,
  homeTeam  : { name: 'Home Team FC', 'shirtUrl': 'kit.png' },
  awayTeam  : { name: 'Away Team FC', 'shirtUrl': 'kit.png' },
  venue     : { name: 'Venue' }
};

// Tests.
describe('<MatchDetail />', () => {
  it('should render match details.', () => {
    const data    = { };
    const wrapper = shallow(<MatchDetail data={mock} />);
    const html    = wrapper.html(); // Render.

    // Test.
    expect(html).to.contain(mock.competition.name);
    expect(html).to.contain(mock.homeGoals);
    expect(html).to.contain(mock.awayGoals);
    expect(html).to.contain(mock.homeTeam.name);
    expect(html).to.contain(mock.awayTeam.name);
  });
});