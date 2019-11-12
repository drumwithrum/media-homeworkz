import React from 'react';
import { shallow } from 'enzyme';
import StartingPage from './StartingPage';

describe('StartingPage view', () => {
  it('renders as expected', () => {
    const component = shallow(<StartingPage />);
    expect(component).toMatchSnapshot();
  });
});
