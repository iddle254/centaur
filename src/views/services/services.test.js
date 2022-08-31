import React from 'react';
import { shallow } from 'enzyme';
import ServicesPage from './services.page.jsx';

it('renders without crashing', () => {
  expect(shallow(<ServicesPage />)).toMatchSnapshot();
});
