import React from 'react';
import { shallow } from 'enzyme';
import ServicesComponent from './Services.component.jsx';

it('renders without crashing', () => {
  expect(shallow(<ServicesComponent />)).toMatchSnapshot();
});
