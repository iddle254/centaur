import React from 'react';
import { shallow } from 'enzyme';
import Teampage from './Teampage.pages.jsx';

it('renders without crashing', () => {
  expect(shallow(<Teampage />)).toMatchSnapshot();
});
