import React from 'react';
import { shallow } from 'enzyme';
import Page from './page-404.component.jsx';

it('renders without crashing', () => {
  expect(shallow(<Page />)).toMatchSnapshot();
});
