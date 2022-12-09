import { isAdjacent } from './isAdjacent';
import { Coord } from './types';

describe('isAdjacent()', () => {
  it.each<[Coord, Coord, boolean]>([
    [{ x: 0, y: 0 }, { x: 0, y: 0 }, true],
    [{ x: -1, y: -1 }, { x: 0, y: 0 }, true],
    [{ x: -1, y: -1 }, { x: 1, y: 0 }, false],
    [{ x: -1, y: -1 }, { x: 0, y: 1 }, false],
    [{ x: -1, y: -1 }, { x: -1, y: 0 }, true],
    [{ x: -1, y: -1 }, { x: -1, y: 0 }, true],
    [{ x: -1, y: -1 }, { x: 0, y: -1 }, true],
  ])(
    'should return true if the coords are adjacent to each other',
    (head, tail, expected) => {
      expect(isAdjacent(head, tail)).toBe(expected);
    }
  );
});
