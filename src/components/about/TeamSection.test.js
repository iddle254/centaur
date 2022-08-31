import React from 'react';
import { shallow } from 'enzyme';
import TeamSection from './TeamSection.js';

it('renders without crashing', () => {
  expect(shallow(<TeamSection />)).toMatchSnapshot();
});
