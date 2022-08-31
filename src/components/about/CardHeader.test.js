import React from 'react';
import { shallow } from 'enzyme';
import CardHeader from './CardHeader.js';

it('renders without crashing', () => {
  expect(shallow(<CardHeader />)).toMatchSnapshot();
});
