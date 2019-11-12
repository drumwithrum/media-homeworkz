---
to: src/utils/<%= name %>/<%= name %>.test.ts
---
import <%= name %> from './<%= name %>';

describe('<%= name %> util functions', () => {
  it('should return processed value', () => {
    const value = 'example';
    const expectedValue = 'EXAMPLE';
    expect(<%= name %>.exampleUtilFunction(value)).toMatchSnapshot(expectedValue);
  });
});
