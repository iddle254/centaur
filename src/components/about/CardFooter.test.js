import React from 'react';
import { shallow } from 'enzyme';
import CardFooter from './CardFooter.js';

it('renders without crashing', () => {
  expect(shallow(<CardFooter />)).toMatchSnapshot();
});
