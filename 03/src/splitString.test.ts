import { splitString } from './splitString';

describe('splitString()', () => {
  it.each([
    ['AvJrwpWtwJgWrhcsFMMfFFhFp'],
    ['BjqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'],
    ['CPmmdzqPrVvPwwTWBwg'],
    ['DwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn'],
    ['EttgJtRGJQctTZtZT'],
    ['FCrZsJsPPZsGzwwsLwLmpwMDw'],
  ])("should throw if string can't equally split", (string) => {
    expect(() => splitString(string)).toThrow();
  });

  it.each([
    ['vJrwpWtwJgWrhcsFMMfFFhFp', ['vJrwpWtwJgWr', 'hcsFMMfFFhFp']],
    [
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      ['jqHRNqRjqzjGDLGL', 'rsFMfFZSrLrFZsSL'],
    ],
    ['PmmdzqPrVvPwwTWBwg', ['PmmdzqPrV', 'vPwwTWBwg']],
    ['wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn', ['wMqvLMZHhHMvwLH', 'jbvcjnnSBnvTQFn']],
    ['ttgJtRGJQctTZtZT', ['ttgJtRGJ', 'QctTZtZT']],
    ['CrZsJsPPZsGzwwsLwLmpwMDw', ['CrZsJsPPZsGz', 'wwsLwLmpwMDw']],
  ])('should return the string split in 2 parts', (string, expected) => {
    expect(splitString(string)).toStrictEqual(expected);
  });
});
