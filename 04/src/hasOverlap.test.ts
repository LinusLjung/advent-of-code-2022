import { hasOverlap } from './hasOverlap';
import { SectionRange } from './types';

describe('hasOverlap()', () => {
  it.each<[SectionRange, SectionRange, boolean]>([
    [[2, 4], [6, 8], false],
    [[2, 3], [4, 5], false],
    [[5, 7], [7, 9], true],
    [[2, 8], [3, 7], true],
    [[3, 7], [2, 8], true],
    [[4, 6], [6, 6], true],
    [[2, 6], [4, 8], true],
    [[6, 7], [4, 5], false],
  ])(
    'should return true if the ranges overlay at some point',
    (a, b, expected) => {
      expect(hasOverlap(a, b)).toStrictEqual(expected);
    }
  );
});
