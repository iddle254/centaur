import React from 'react';
import { shallow } from 'enzyme';
import InfoArea from './InfoArea.js';

it('renders without crashing', () => {
  expect(shallow(<InfoArea />)).toMatchSnapshot();
});
