import React from 'react';
import { shallow } from 'enzyme';
import CardBody from './CardBody.js';

it('renders without crashing', () => {
  expect(shallow(<CardBody />)).toMatchSnapshot();
});
