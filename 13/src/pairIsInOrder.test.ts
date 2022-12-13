import { pairIsInOrder } from './pairIsInOrder';
import { Packet } from './types';

describe('pairIsInOrder()', () => {
  it.each<[Packet, Packet, boolean]>([
    [[1, 1, 3, 1, 1], [1, 1, 5, 1, 1], true],
    [[[1], [2, 3, 4]], [[1], 4], true],
    [[9], [[8, 7, 6]], false],
    [[[4, 4], 4, 4], [[4, 4], 4, 4, 4], true],
    [[7, 7, 7, 7], [7, 7, 7], false],
    [[], [3], true],
    [[[[]]], [[]], false],
    [
      [1, [2, [3, [4, [5, 6, 7]]]], 8, 9],
      [1, [2, [3, [4, [5, 6, 0]]]], 8, 9],
      false,
    ],
  ])('should return true if the pair is in order', (a, b, expected) => {
    expect(pairIsInOrder(a, b)).toBe(expected);
  });
});
