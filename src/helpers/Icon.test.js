// Package modules.
import { expect }  from 'chai';
import { shallow } from 'enzyme';
import React       from 'react';

// Local modules.
import Icon from './Icon';

// Tests.
describe('<Icon />', () => {
  it('should render an icon.', () => {
    const wrapper = shallow(<Icon />);
    expect(wrapper.find('.icon')).to.have.length(1);
  });
  it('should render an icon with alternative text.', () => {
    const expected = 'foo';
    const wrapper = shallow(<Icon alt={expected} />);
    expect(wrapper.find('.icon').prop('alt')).to.equal(expected);
  });
  it('should render an icon with source.', () => {
    const expected = 'foo';
    const wrapper = shallow(<Icon src={expected} />);
    expect(wrapper.find('.icon').prop('src')).to.equal(expected);
  });
});