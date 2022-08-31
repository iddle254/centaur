import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './home.page.jsx';

it('renders without crashing', () => {
  expect(shallow(<HomePage />)).toMatchSnapshot();
});
