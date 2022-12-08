import { Grid } from './types';

function getTree(grid: Grid, x: number, y: number): number | null {
  return grid[y]?.[x] ?? null;
}

function isVisibleFromTop(grid: Grid, x: number, y: number): boolean {
  const tree = getTree(grid, x, y);

  if (!tree) {
    return false;
  }

  return !grid
    .slice(0, y)
    .map((row) => row[x])
    .some((t) => t >= tree);
}

function isVisibleFromBottom(grid: Grid, x: number, y: number): boolean {
  const tree = getTree(grid, x, y);

  if (!tree) {
    return false;
  }

  return !grid
    .slice(y + 1)
    .map((row) => row[x])
    .some((t) => t >= tree);
}

function isVisibleFromLeft(grid: Grid, x: number, y: number): boolean {
  const tree = getTree(grid, x, y);

  if (!tree) {
    return false;
  }

  return !grid[y].slice(0, x).some((t) => t >= tree);
}

function isVisibleFromRight(grid: Grid, x: number, y: number): boolean {
  const tree = getTree(grid, x, y);

  if (!tree) {
    return false;
  }

  return !grid[y].slice(x + 1).some((t) => t >= tree);
}

export function isVisible(grid: Grid, x: number, y: number): boolean {
  const maxX = grid[0].length - 1;
  const maxY = grid.length - 1;

  if (x === 0 || x === maxX || y === 0 || y === maxY) {
    return true;
  }

  if (
    isVisibleFromTop(grid, x, y) ||
    isVisibleFromBottom(grid, x, y) ||
    isVisibleFromLeft(grid, x, y) ||
    isVisibleFromRight(grid, x, y)
  ) {
    return true;
  }

  return false;
}
