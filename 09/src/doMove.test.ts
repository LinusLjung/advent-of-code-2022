import { doMove } from './doMove';
import { Coord } from './types';

describe('doMove()', () => {
  it.each<[Coord, Coord, string, Record<'head' | 'tail', Coord>]>([
    [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      'R',
      { head: { x: 1, y: 0 }, tail: { x: 0, y: 0 } },
    ],
    [
      { x: 1, y: 0 },
      { x: 0, y: 0 },
      'U',
      { head: { x: 1, y: 1 }, tail: { x: 0, y: 0 } },
    ],
    [
      { x: 1, y: 1 },
      { x: 0, y: 0 },
      'U',
      { head: { x: 1, y: 2 }, tail: { x: 1, y: 1 } },
    ],
    [
      { x: 1, y: 2 },
      { x: 1, y: 1 },
      'U',
      { head: { x: 1, y: 3 }, tail: { x: 1, y: 2 } },
    ],
    [
      { x: 1, y: 3 },
      { x: 1, y: 2 },
      'L',
      { head: { x: 0, y: 3 }, tail: { x: 1, y: 2 } },
    ],
    [
      { x: 0, y: 3 },
      { x: 1, y: 2 },
      'L',
      { head: { x: -1, y: 3 }, tail: { x: 0, y: 3 } },
    ],
    [
      { x: -1, y: 3 },
      { x: 0, y: 3 },
      'L',
      { head: { x: -2, y: 3 }, tail: { x: -1, y: 3 } },
    ],
    [
      { x: -2, y: 3 },
      { x: -1, y: 3 },
      'D',
      { head: { x: -2, y: 2 }, tail: { x: -1, y: 3 } },
    ],
    [
      { x: -2, y: 2 },
      { x: -1, y: 3 },
      'D',
      { head: { x: -2, y: 1 }, tail: { x: -2, y: 2 } },
    ],
    [
      { x: -2, y: 1 },
      { x: -2, y: 2 },
      'U',
      { head: { x: -2, y: 2 }, tail: { x: -2, y: 2 } },
    ],
  ])(
    'should move the head and the tail should follow',
    (head, tail, move, expected) => {
      expect(doMove(head, tail, move)).toStrictEqual(expected);
    }
  );
});
