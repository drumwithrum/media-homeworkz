---
to: src/views/<%= name %>/store/reducer.test.ts
---
import <%= name %> from './reducer';
import types from './types';

describe('<%= name %> view reducer', () => {
  it('should set state', () => {
    const reducer = <%= name %>({ test: true }, { type: 'TEST' });
    expect(reducer).toEqual({ test: true });
  });

  it('should handle default action', () => {
    const reducer = <%= name %>(undefined, { type: 'TEST' });
    expect(reducer).toEqual({ examples: [] });
  });

  it('should handle EXAMPLE_TYPE action', () => {
    const action = { type: types.EXAMPLE_TYPE };
    const reducer = <%= name %>(undefined, action);
    expect(reducer).toEqual({ examples: ['example'] });
  });
});
