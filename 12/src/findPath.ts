import { findEndNode } from './findNode';
import { getSortedQueue } from './getSortedQueue';
import { Node } from './Node';
import { Coord, Grid } from './types';

export function findPath(grid: Grid<Node>, startCoord: Coord): number {
  const startNode = grid[startCoord[1]][startCoord[0]];

  startNode.gCost = 0;
  const end = findEndNode(grid);
  let queue = [startNode];

  queue = getSortedQueue(queue);

  let current = queue.shift();

  for (; current !== end; current = queue.shift()) {
    current!.visited = true;
    queue.push(
      ...current!.findAdjacents().filter((node) => {
        return !queue.includes(node);
      })
    );
    queue = getSortedQueue(queue);
  }

  return current.gCost!;
}
