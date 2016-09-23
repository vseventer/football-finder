// Package modules.
import { expect }  from 'chai';
import { shallow } from 'enzyme';
import React       from 'react';
import { Link }    from 'react-router';

// Local modules.
import PageNotFound from './PageNotFound';

// Tests.
describe('<PageNotFound />', () => {
  it('should render a link to home.', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper.find(Link)).to.have.length(1);
    wrapper.find(Link).forEach((node) => {
      expect(node.prop('to')).to.equal('/');
    })
  });
});