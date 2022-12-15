import { getCoordsFromRange } from './getCoordsFromRange';
import { Coord } from './types';

describe('getCoordsFromRange()', () => {
  it.each<[string, Coord[]]>([
    [
      '498,4 -> 498,6 -> 496,6',
      [
        [498, 4],
        [498, 5],
        [498, 6],
      ],
    ],
    [
      '503,4 -> 502,4 -> 502,9 -> 494,9',
      [
        [503, 4],
        [502, 4],
        [502, 5],
        [502, 6],
        [502, 7],
        [502, 8],
        [502, 9],
        [501, 9],
        [500, 9],
        [499, 9],
        [498, 9],
        [497, 9],
        [496, 9],
        [495, 9],
        [494, 9],
      ],
    ],
  ])('should return a list of rock coordinates', (input, expected) => {
    expect(getCoordsFromRange(input)).toStrictEqual(
      expect.arrayContaining(expected)
    );
  });
});
