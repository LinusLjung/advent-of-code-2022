import { findSharedType } from './findSharedType';

describe('findBadgeType', () => {
  it.each<[[string, string, string], string]>([
    [
      [
        'vJrwpWtwJgWrhcsFMMfFFhFp',
        'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
        'PmmdzqPrVvPwwTWBwg',
      ],
      'r',
    ],
    [
      [
        'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
        'ttgJtRGJQctTZtZT',
        'CrZsJsPPZsGzwwsLwLmpwMDw',
      ],
      'Z',
    ],
  ])('should find the shared type between the lists', (list, expected) => {
    expect(findSharedType(list)).toBe(expected);
  });
});
