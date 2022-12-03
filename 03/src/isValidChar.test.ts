import { isValidChar } from './isValidChar';

describe('isValidChar()', () => {
  it.each<[string, boolean]>([
    ['a', true],
    ['z', true],
    ['A', true],
    ['Z', true],
    ['', false],
    [' ', false],
    ['å', false],
    ['Å', false],
    ['ab', false],
  ])('should return true for [a-zA-Z]', (char: string, expected) => {
    expect(isValidChar(char)).toBe(expected);
  });
});
