---
to: src/views/<%= name %>/store/selectors.test.ts
---
import { getExamples } from './selectors';

describe('<%= name %> view selectors', () => {
  it('should return examples', () => {
    const state = {
      <%= name %>: { examples: [1, 2, 3] },
    };
    const value = getExamples(state);
    expect(value).toEqual([1, 2, 3]);
  });
});
