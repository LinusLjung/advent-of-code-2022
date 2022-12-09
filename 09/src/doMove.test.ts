import { doMove } from './doMove';
import { Coord } from './types';

describe('doMove()', () => {
  it.each<[Coord, Coord[], string, { head: Coord; tails: Coord[] }]>([
    [
      { x: 0, y: 0 },
      [{ x: 0, y: 0 }],
      'R',
      { head: { x: 1, y: 0 }, tails: [{ x: 0, y: 0 }] },
    ],
    [
      { x: 1, y: 0 },
      [{ x: 0, y: 0 }],
      'U',
      { head: { x: 1, y: 1 }, tails: [{ x: 0, y: 0 }] },
    ],
    [
      { x: 1, y: 1 },
      [{ x: 0, y: 0 }],
      'U',
      { head: { x: 1, y: 2 }, tails: [{ x: 1, y: 1 }] },
    ],
    [
      { x: 1, y: 2 },
      [{ x: 1, y: 1 }],
      'U',
      { head: { x: 1, y: 3 }, tails: [{ x: 1, y: 2 }] },
    ],
    [
      { x: 1, y: 3 },
      [{ x: 1, y: 2 }],
      'L',
      { head: { x: 0, y: 3 }, tails: [{ x: 1, y: 2 }] },
    ],
    [
      { x: 0, y: 3 },
      [{ x: 1, y: 2 }],
      'L',
      { head: { x: -1, y: 3 }, tails: [{ x: 0, y: 3 }] },
    ],
    [
      { x: -1, y: 3 },
      [{ x: 0, y: 3 }],
      'L',
      { head: { x: -2, y: 3 }, tails: [{ x: -1, y: 3 }] },
    ],
    [
      { x: -2, y: 3 },
      [{ x: -1, y: 3 }],
      'D',
      { head: { x: -2, y: 2 }, tails: [{ x: -1, y: 3 }] },
    ],
    [
      { x: -2, y: 2 },
      [{ x: -1, y: 3 }],
      'D',
      { head: { x: -2, y: 1 }, tails: [{ x: -2, y: 2 }] },
    ],
    [
      { x: -2, y: 1 },
      [{ x: -2, y: 2 }],
      'U',
      { head: { x: -2, y: 2 }, tails: [{ x: -2, y: 2 }] },
    ],
  ])(
    'should move the head and the tail should follow',
    (head, tails, move, expected) => {
      expect(doMove(head, tails, move)).toStrictEqual(expected);
    }
  );

  it('should handle multiple tails', () => {
    const [head, ...tails]: Coord[] = [
      { x: 3, y: 4 },
      { x: 3, y: 3 },
      { x: 2, y: 2 },
      { x: 1, y: 2 },
      { x: 0, y: 1 },
      { x: -1, y: 0 },
    ];

    expect(doMove(head, tails, 'U')).toStrictEqual<{
      head: Coord;
      tails: Coord[];
    }>({
      head: { x: 3, y: 5 },
      tails: [
        { x: 3, y: 4 },
        { x: 3, y: 3 },
        { x: 2, y: 3 },
        { x: 1, y: 2 },
        { x: 0, y: 1 },
      ],
    });
  });
});
