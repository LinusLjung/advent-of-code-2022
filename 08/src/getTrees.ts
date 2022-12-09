import { TreeFunction } from './types';

export const getTopTrees: TreeFunction<number[]> = (grid, x, y) => {
  return grid.slice(0, y).map((row) => row[x]);
};

export const getBottomTrees: TreeFunction<number[]> = (grid, x, y) => {
  return grid.slice(y + 1).map((row) => row[x]);
};

export const getLeftTrees: TreeFunction<number[]> = (grid, x, y) => {
  return grid[y].slice(0, x);
};

export const getRightTrees: TreeFunction<number[]> = (grid, x, y) => {
  return grid[y].slice(x + 1);
};
