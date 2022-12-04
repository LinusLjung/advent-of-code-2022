import { fullyContains } from './fullyContains';

describe('fullyContains()', () => {
  it.each<[[number, number], [number, number], boolean]>([
    [[2, 4], [6, 8], false],
    [[2, 3], [4, 5], false],
    [[5, 7], [7, 9], false],
    [[2, 8], [3, 7], true],
    [[3, 7], [2, 8], false],
    [[4, 6], [6, 6], true],
    [[2, 6], [4, 8], false],
  ])(
    'should return true if first range covers the whole second range',
    (a, b, expected) => {
      expect(fullyContains(a, b)).toBe(expected);
    }
  );
});
