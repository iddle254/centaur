import React from 'react';
import { shallow } from 'enzyme';
import GridContainer from './GridContainer.js';

it('renders without crashing', () => {
  expect(shallow(<GridContainer />)).toMatchSnapshot();
});
