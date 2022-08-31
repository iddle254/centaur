import React from 'react';
import { shallow } from 'enzyme';
import BlogPage from './blog.page.jsx';

it('renders without crashing', () => {
  expect(shallow(<BlogPage />)).toMatchSnapshot();
});
