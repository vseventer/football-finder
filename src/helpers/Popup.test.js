// Package modules.
import { expect }  from 'chai';
import { shallow } from 'enzyme';
import React       from 'react';

// Local modules.
import MatchDetail from './MatchDetail';
import Popup       from './Popup';

// Configure.
var mock = { dbid: 1 };

// Tests.
describe('<MatchDetail />', () => {
  it('should render match details.', () => {
    const wrapper = shallow(<Popup data={mock} />);
    expect(wrapper.find(MatchDetail)).to.have.length(1);
  });
});