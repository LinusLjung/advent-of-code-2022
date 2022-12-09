import { TreeFunction } from './types';

export const getTree: TreeFunction<number> = (grid, x, y) => {
  return grid[y][x];
};
