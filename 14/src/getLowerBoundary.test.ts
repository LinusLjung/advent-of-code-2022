import { getLowerBoundary } from './getLowerBoundary';
import { Coord } from './types';

describe('getLowerBoundary()', () => {
  it.each<[Coord[], number]>([
    [
      [
        [498, 4],
        [498, 5],
        [498, 6],
        [496, 6],
        [497, 6],
        [498, 6],
        [502, 4],
        [503, 4],
        [502, 4],
        [502, 5],
        [502, 6],
        [502, 7],
        [502, 8],
        [502, 9],
        [494, 9],
        [495, 9],
        [496, 9],
        [497, 9],
        [498, 9],
        [499, 9],
        [500, 9],
        [501, 9],
        [502, 9],
      ],
      9,
    ],
  ])('should return the highest y value', (input, expected) => {
    expect(getLowerBoundary(input)).toBe(expected);
  });
});
