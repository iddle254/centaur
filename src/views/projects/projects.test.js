import React from 'react';
import { shallow } from 'enzyme';
import ProjectsPage from './projects.page.jsx';

it('renders without crashing', () => {
  expect(shallow(<ProjectsPage />)).toMatchSnapshot();
});
