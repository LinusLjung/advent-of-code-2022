import { getGrid } from './getGrid';
import { isVisible } from './isVisible';

export function part1(input: string) {
  return getGrid(input).reduce(
    (sum, row, y, grid) =>
      sum + row.filter((_, x) => isVisible(grid, x, y)).length,
    0
  );
}
