import React from 'react';
import { shallow } from 'enzyme';
import NotFoundView from './404.component.jsx';

it('renders without crashing', () => {
  expect(shallow(<NotFoundView />)).toMatchSnapshot();
});
