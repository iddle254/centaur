import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from './about.page.jsx';

it('renders without crashing', () => {
  expect(shallow(<AboutPage />)).toMatchSnapshot();
});
