import { Grid } from './types';
import { Node } from './Node';

export function generateGrid(input: string): Grid<Node> {
  const grid = input
    .split('\n')
    .map((line, y) =>
      line.split('').map((height, x) => new Node(x, y, height))
    );

  grid.forEach((line) => line.forEach((node) => node.setGrid(grid)));

  return grid;
}
