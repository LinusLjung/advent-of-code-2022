import { Grid } from './types';

export function isEdge(grid: Grid, x: number, y: number): boolean {
  const maxX = grid[0].length - 1;
  const maxY = grid.length - 1;

  if (x === 0 || x === maxX || y === 0 || y === maxY) {
    return true;
  }

  return false;
}
