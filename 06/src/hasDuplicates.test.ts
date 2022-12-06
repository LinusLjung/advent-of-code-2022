import { hasDuplicates } from './hasDuplicates';

describe('hasDuplicates()', () => {
  it.each([
    ['aaaa', true],
    ['bbbb', true],
    ['abca', true],
    ['abcd', false],
    ['a', false],
  ])(
    'should return true if there are duplicates in the string',
    (input, expected) => {
      expect(hasDuplicates(input)).toBe(expected);
    }
  );
});
