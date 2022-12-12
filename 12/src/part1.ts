import { findStartNode } from './findNode';
import { findPath } from './findPath';
import { generateGrid } from './generateGrid';

export function part1(input: string) {
  const grid = generateGrid(input);
  const startNode = findStartNode(grid);

  return findPath(grid, [startNode.x, startNode.y]);
}
