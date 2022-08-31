import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js';

it('renders without crashing', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
