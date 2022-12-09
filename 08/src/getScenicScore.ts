import { getTree } from './getTree';
import {
  getBottomTrees,
  getLeftTrees,
  getRightTrees,
  getTopTrees,
} from './getTrees';
import { isEdge } from './isEdge';
import { Grid, TreeFunction } from './types';

type TreeScoreFunction = TreeFunction<number>;

function getScoreFromRow(row: number[], tree: number) {
  let i = 0;
  for (; i < row.length; i++) {
    if (row[i] >= tree) {
      return i + 1;
    }
  }

  return i;
}

export const getTopScore: TreeScoreFunction = (grid, x, y) => {
  const tree = getTree(grid, x, y);
  const trees = getTopTrees(grid, x, y).reverse();

  return getScoreFromRow(trees, tree);
};

export const getBottomScore: TreeScoreFunction = (grid, x, y) => {
  const tree = getTree(grid, x, y);
  const trees = getBottomTrees(grid, x, y);

  return getScoreFromRow(trees, tree);
};

export const getLeftScore: TreeScoreFunction = (grid, x, y) => {
  const tree = getTree(grid, x, y);
  const trees = getLeftTrees(grid, x, y).reverse();

  return getScoreFromRow(trees, tree);
};

export const getRightScore: TreeScoreFunction = (grid, x, y) => {
  const tree = getTree(grid, x, y);
  const trees = getRightTrees(grid, x, y);

  return getScoreFromRow(trees, tree);
};

export const getScenicScore: TreeScoreFunction = (
  grid: Grid,
  x: number,
  y: number
) => {
  if (isEdge(grid, x, y)) {
    return 0;
  }

  return (
    getTopScore(grid, x, y) *
    getBottomScore(grid, x, y) *
    getLeftScore(grid, x, y) *
    getRightScore(grid, x, y)
  );
};
