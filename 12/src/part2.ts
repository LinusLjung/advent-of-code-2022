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
    .map((node) => findPath(generateGrid(input), [node.x, node.y]))
    .reduce<number>((acc, curr) => {
      if (acc == null) {
        return curr;
      }

      return Math.min(acc, curr);
    }, Infinity);
}
