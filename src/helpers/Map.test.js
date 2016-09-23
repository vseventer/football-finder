// Package modules.
import { expect } from 'chai';
import { mount }  from 'enzyme';
import React      from 'react';

// Patch JSDom as Leaflet requires clientWidth and clientHeight.
// @see https://github.com/airbnb/enzyme/issues/524
Element.prototype.clientWidth = Element.prototype.clientHeight = 100;

// Local modules.
import Map from './Map';

// Tests.
describe('<Map />', () => {
  it('should render a Leaflet map.', () => {
    const wrapper = mount(<Map />);
    expect(wrapper.find('.leaflet-container')).to.have.length(1);
  });
});