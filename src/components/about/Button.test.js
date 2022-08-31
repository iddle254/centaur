import React from 'react';
import { shallow } from 'enzyme';
import RegularButton from './Button.js';

it('renders without crashing', () => {
  expect(shallow(<RegularButton />)).toMatchSnapshot();
});
