import { coordIsOutOfBounds } from './coordIsOutOfBounds';
import { Coord } from './types';

describe('coordIsOutOfBounds()', () => {
  it.each<[Coord, number, boolean]>([
    [[0, 0], 0, true],
    [[0, 0], 1, false],
    [[0, 0], -1, true],
    [[10, 0], 0, true],
    [[10, 0], 1, false],
    [[10, 0], -1, true],
  ])(
    'should return true if the coord has reached the limit',
    (coord, limit, expected) => {
      expect(coordIsOutOfBounds(coord, limit)).toBe(expected);
    }
  );
});
