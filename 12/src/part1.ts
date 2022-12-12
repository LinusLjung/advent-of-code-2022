import { findEndNode, findStartNode } from './findNode';
import { generateGrid } from './generateGrid';
import { Node } from './Node';

function getSortedQueue(queue: Node[]): Node[] {
  queue = queue.sort((a, b) => {
    const fDiff = a.fCost - b.fCost;

    if (fDiff === 0) {
      return a.hCost! - b.hCost!;
    }

    return fDiff;
  });

  return queue;
}

export function part1(input: string) {
  const grid = generateGrid(input);
  const start = findStartNode(grid);
  start.gCost = 0;
  const end = findEndNode(grid);
  let queue = [start];

  queue = getSortedQueue(queue);

  let current = queue.shift();
  current!.visited = true;

  for (; current !== end; current = queue.shift()) {
    current!.visited = true;
    queue.push(
      ...current!.findAdjacents().filter((node) => !queue.includes(node))
    );
    queue = getSortedQueue(queue);
  }

  return current.gCost;
}
