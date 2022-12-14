import { drawGrid } from './drawGrid';
import { Coord } from './types';

describe('drawGrid()', () => {
  it('should draw the grid', () => {
    const coords: Coord[] = [
      [498, 4],
      [498, 5],
      [498, 6],
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
      [496, 6],
      [497, 6],
      [495, 9],
      [494, 9],
    ];

    expect(drawGrid(coords, [])).toBe(`......+...
..........
..........
..........
....#...##
....#...#.
..###...#.
........#.
........#.
#########.
`);
  });
});
