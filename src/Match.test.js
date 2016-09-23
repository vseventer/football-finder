// Package modules.
import { expect }  from 'chai';
import { shallow } from 'enzyme';
import React       from 'react';

// Local modules.
import Match       from './Match';
import MatchDetail from './helpers/MatchDetail';
import Tweet       from './helpers/Tweet';

// Configure.
var mock = {
  homeTeam : { name: 'Home Team FC', shortCode: 'HOM' },
  awayTeam : { name: 'Away Team FC', shortCode: 'AWA' },
  tweets   : [ { id: 1 }, { id: 2 } ] // Two empty tweets.
};

// Tests.
describe('<Match />', () => {
  it('should initially render null.', () => {
    const wrapper = shallow(<Match />);
    expect(wrapper.html()).to.be.null;
  });

  it('should render match details.', () => {
    const wrapper = shallow(<Match />);
    wrapper.setState({ data: mock }); // Trigger state change to populate DOM.
    expect(wrapper.find(MatchDetail)).to.have.length(1);
  });

  it('should render tweets.', () => {
    const wrapper = shallow(<Match />);
    wrapper.setState({ data: mock }); // Trigger state change to populate DOM.
    expect(wrapper.find(Tweet)).to.have.length(2);
  });
});