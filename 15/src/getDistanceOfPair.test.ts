import { getDistanceOfPair } from './getDistanceOfPair';

describe('getDistanceOfPair()', () => {
  it.each([
    [
      [
        [2, 18],
        [-2, 15],
      ],
      7,
    ],
    [
      [
        [9, 16],
        [10, 16],
      ],
      1
    ],
    [
      [
        [13, 2],
        [15, 3],
      ],
      3
    ],
    [
      [
        [12, 14],
        [10, 16],
      ],
      8
    ],
  ])('should return the Manhattan distance of the pair', () => {});
});
