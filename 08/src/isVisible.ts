import { getTree } from './getTree';
import {
  getBottomTrees,
  getLeftTrees,
  getRightTrees,
  getTopTrees,
} from './getTrees';
import { isEdge } from './isEdge';
import { TreeFunction } from './types';

const isVisibleFromTop: TreeFunction<boolean> = (grid, x, y) => {
  const tree = getTree(grid, x, y);

  return !getTopTrees(grid, x, y).some((t) => t >= tree);
};

const isVisibleFromBottom: TreeFunction<boolean> = (grid, x, y) => {
  const tree = getTree(grid, x, y);

  return !getBottomTrees(grid, x, y).some((t) => t >= tree);
};

const isVisibleFromLeft: TreeFunction<boolean> = (grid, x, y) => {
  const tree = getTree(grid, x, y);

  return !getLeftTrees(grid, x, y).some((t) => t >= tree);
};

const isVisibleFromRight: TreeFunction<boolean> = (grid, x, y) => {
  const tree = getTree(grid, x, y);

  return !getRightTrees(grid, x, y).some((t) => t >= tree);
};

export const isVisible: TreeFunction<boolean> = (grid, x, y) => {
  if (
    isEdge(grid, x, y) ||
    isVisibleFromTop(grid, x, y) ||
    isVisibleFromBottom(grid, x, y) ||
    isVisibleFromLeft(grid, x, y) ||
    isVisibleFromRight(grid, x, y)
  ) {
    return true;
  }

  return false;
};
