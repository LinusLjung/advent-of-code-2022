import { getCharPriority } from './getCharPriority';

describe('getCharPriority()', () => {
  it.each<[string]>([[''], ['ab'], [' '], ['ab']])(
    'should throw if not passed a valid char',
    (input) => {
      expect(() => getCharPriority(input)).toThrow();
    }
  );

  it.each([
    ['a', 1],
    ['p', 16],
    ['s', 19],
    ['t', 20],
    ['v', 22],
    ['z', 26],
    ['A', 27],
    ['L', 38],
    ['P', 42],
    ['Z', 52],
  ])('should return the priority of the character', (char, priority) => {
    expect(getCharPriority(char)).toBe(priority);
  });
});
