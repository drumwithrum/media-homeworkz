---
to: src/views/<%= name %>/<%= name %>.test.tsx
---
import React from 'react';
import { shallow } from 'enzyme';
import <%= name %> from './<%= name %>';

describe('<%= name %> view', () => {
  it('renders as expected', () => {
    const component = shallow(<<%= name %> />);
    expect(component).toMatchSnapshot();
  });
});
