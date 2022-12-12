import { Grid } from './types';
import { Node } from './Node';

export function findNode(grid: Grid<Node>, height: string): Node {
  for (let row of grid) {
    for (let node of row) {
      if (node.height === height) {
        return node;
      }
    }
  }

  throw new Error(`Could not find node ${height}`);
}

export function findStartNode(grid: Grid<Node>) {
  return findNode(grid, 'S');
}

export function findEndNode(grid: Grid<Node>) {
  return findNode(grid, 'E');
}
