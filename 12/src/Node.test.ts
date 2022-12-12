import { Node } from './Node';
import { Grid } from './types';

function getGrid() {
  const grid = [
    ['S', 'a', 'b', 'q', 'p', 'o', 'n', 'm'],
    ['a', 'b', 'c', 'r', 'y', 'x', 'x', 'l'],
    ['a', 'c', 'c', 's', 'z', 'E', 'x', 'k'],
    ['a', 'c', 'c', 't', 'u', 'v', 'w', 'j'],
    ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i'],
  ].map((line, y) => line.map((height, x) => new Node(x, y, height)));

  grid.forEach((row) => row.forEach((node) => node.setGrid(grid)));

  return grid;
}

let grid: Grid<Node> = getGrid();

describe('Node', () => {
  describe('.calculateCost()', () => {
    it.each<[Node, Node, number, number, number, number]>([
      [grid[1][0], grid[0][0], 0, 1, 6, 7],
      [grid[0][1], grid[1][1], 0, 1, 6, 7],
      [grid[4][0], grid[3][0], 3, 4, 7, 11],
    ])(
      'should calculate the cost of the node',
      (node, previousNode, previousNodeGCost, gCost, hCost, fCost) => {
        node = new Node(node.x, node.y, node.height);
        previousNode = new Node(
          previousNode.x,
          previousNode.y,
          previousNode.height
        );
        node.setGrid(grid);
        previousNode.setGrid(grid);
        previousNode.gCost = previousNodeGCost;
        node.calculateCost(previousNode);

        expect(node.gCost).toBe(gCost);
        expect(node.hCost).toBe(hCost);
        expect(node.fCost).toBe(fCost);
      }
    );
  });

  describe('.findAdjacents()', () => {
    it.each([
      [grid[0][0], [grid[1][0], grid[0][1]]],
      [grid[1][1], [grid[0][1], grid[2][1], grid[1][0], grid[1][2]]],
      [grid[4][7], [grid[3][7], grid[4][6]]],
    ])('should touch and return all adjacent nodes', (node, expected) => {
      node.gCost = 0;

      const nodes = node.findAdjacents();

      expect(nodes.map((node) => [node.x, node.y])).toStrictEqual(
        expected.map((node) => [node.x, node.y])
      );
    });

    it('should not return already visited nodes', () => {
      const grid = getGrid();

      grid[3][2].visited = true;

      const node = grid[3][3];
      node.gCost = 0;

      expect(
        node.findAdjacents().map((node) => [node.x, node.y])
      ).toStrictEqual(
        [grid[2][3], grid[4][3], grid[3][4]].map((node) => [node.x, node.y])
      );
    });
  });
});
