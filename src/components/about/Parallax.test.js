import React from 'react';
import { shallow } from 'enzyme';
import Parallax from './Parallax.js';

it('renders without crashing', () => {
  expect(shallow(<Parallax />)).toMatchSnapshot();
});
