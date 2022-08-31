import React from 'react';
import { shallow } from 'enzyme';
import GridItem from './GridItem.js';

it('renders without crashing', () => {
  expect(shallow(<GridItem />)).toMatchSnapshot();
});
