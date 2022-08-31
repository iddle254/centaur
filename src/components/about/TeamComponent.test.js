import React from 'react';
import { shallow } from 'enzyme';
import TeamComponent from './TeamComponent.js';

import charles from '../../assets/me32.jpg';

it('renders without crashing', () => {
  const mockProps = {
    name: 'Charles Motaroki',
    title: 'Software Engineer',
    image: { charles },
    description:
      "Driven, motivated and ambitious. We couldn't recommend anyone better to handle your ...",
  };
  expect(shallow(<TeamComponent {...mockProps} />)).toMatchSnapshot();
});
