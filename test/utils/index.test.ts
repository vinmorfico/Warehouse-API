import { isNotEmpty, isEmpty } from '../../src/utils';

describe(isNotEmpty.name, () => {
  test('should return true for object with props', () => {
    const result = isNotEmpty({ a: 'temp' });

    expect(result).toBeTruthy();
  });

  test('should return false for empty object', () => {
    const result = isNotEmpty({});

    expect(result).toBeFalsy();
  });
});

describe(isEmpty.name, () => {
  test('should return true for object with props', () => {
    const result = isNotEmpty({ a: 'temp' });

    expect(result).toBeTruthy();
  });

  test('should return false for empty object', () => {
    const result = isNotEmpty({});

    expect(result).toBeFalsy();
  });
});
