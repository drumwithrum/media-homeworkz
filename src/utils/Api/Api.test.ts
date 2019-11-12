import Api from './Api';

describe('Api util functions', () => {
  it('should return processed value', () => {
    const value = 'example';
    const expectedValue = 'EXAMPLE';
    expect(Api.exampleUtilFunction(value)).toMatchSnapshot(expectedValue);
  });
});
