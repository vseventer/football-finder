// Package modules.
import { expect } from 'chai';
import { mount }  from 'enzyme';
import moment     from 'moment';
import React      from 'react';

// Local modules.
import Tweet from './Tweet';

// Configure.
var mock = {
  id_str     : '1',
  created_at : moment(),
  text       : 'This is a test.',
  entities   : { },
  user       : { screen_name: 'foo' }
};

// Tests.
describe('<MatchDetail />', () => {
  it('should render.', () => {
    const wrapper = mount(<Tweet data={mock} />);
    const html    = wrapper.html(); // Render.

    // Test.
    expect(html).to.contain(mock.text);
    expect(html).to.contain(mock.user.screen_name);
  });
});