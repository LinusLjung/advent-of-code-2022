import { findPath } from './findPath';
import { generateGrid } from './generateGrid';
import { Node } from './Node';

export function part2(input: string) {
  const grid = generateGrid(input);
  const startingNodes: Node[] = [];

  for (let row of grid) {
    for (let node of row) {
      if (node.height === 'S' || node.height === 'a') {
        startingNodes.push(node);
      }
    }
  }

  return startingNodes
    .map((node) => {
      // Some paths never find the end. Ignore those paths.
      // Not my proudest moment
      try {
        return findPath(generateGrid(input), [node.x, node.y]);
      } catch (e) {
        return Infinity;
      }
    })
    .reduce<number>((acc, curr) => {
      if (acc == null) {
        return curr;
      }

      return Math.min(acc, curr);
    }, Infinity);
}
