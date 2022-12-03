import { findDuplicates } from './findDuplicates';

describe('findDuplicates()', () => {
  it.each<[[string, string], string[]]>([
    [['vJrwpWtwJgWr', 'hcsFMMfFFhFp'], ['p']],
    [['jqHRNqRjqzjGDLGL', 'rsFMfFZSrLrFZsSL'], ['L']],
    [['PmmdzqPrV', 'vPwwTWBwg'], ['P']],
    [['wMqvLMZHhHMvwLH', 'jbvcjnnSBnvTQFn'], ['v']],
    [['ttgJtRGJ', 'QctTZtZT'], ['t']],
    [['CrZsJsPPZsGz', 'wwsLwLmpwMDw'], ['s']],
    [
      ['CrZsJsPPZsGz', 'wwsLwLmpwMDz'],
      ['s', 'z'],
    ],
  ])(
    'should return all chars that exist in both strings',
    (strings, expected) => {
      expect(findDuplicates(strings)).toStrictEqual(expected);
    }
  );
});
