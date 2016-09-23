// Package modules.
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import React from 'react';

// Local modules.
import App from './App';
import Map from './helpers/Map';

// Tests.
describe('<App />', () => {
  it('should render a map.', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Map)).to.have.length(1);
  });
});