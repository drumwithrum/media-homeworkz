---
to: src/views/<%= name %>/store/types.test.ts
---
import types from './types';

describe('<%= name %> view action types', () => {
  it('should return expected action types', () => {
    expect(types).toMatchSnapshot();
  });
});
