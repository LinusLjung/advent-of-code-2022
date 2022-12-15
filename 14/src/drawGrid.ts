import { Coord } from './types';

export function drawGrid(
  obstacles: Coord[],
  sand: Coord[],
  withNumbers = false
): string {
  const all = [...obstacles, ...sand];
  const startX = all.reduce<number>((acc, [x]) => Math.min(acc, x), Infinity);
  const endX = all.reduce<number>((acc, [x]) => Math.max(acc, x), -Infinity);
  const startY = 0;
  const endY = all.reduce<number>((acc, [, y]) => Math.max(acc, y), -Infinity);

  let grid = '';

  for (let y = startY; y <= endY; y++) {
    for (let x = startX; x <= endX; x++) {
      if (x === 500 && y === 0) {
        grid += '+';
        continue;
      }
      if (obstacles.some((coord) => coord[0] === x && coord[1] === y)) {
        grid += '#';
        continue;
      }

      if (sand.some((coord) => coord[0] === x && coord[1] === y)) {
        grid += withNumbers ? x % 10 : 'o';
        continue;
      }

      grid += '.';
    }
    grid += '\n';
  }

  return grid;
}
