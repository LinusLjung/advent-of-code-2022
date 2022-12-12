import { findEndNode, findNode, findStartNode } from './findNode';
import { Node } from './Node';
import { Coord, Grid } from './types';

describe('findNode', () => {
  const grid: Grid<Node> = [
    ['S', 'a', 'b', 'q', 'p', 'o', 'n', 'm'],
    ['a', 'b', 'c', 'r', 'y', 'x', 'x', 'l'],
    ['a', 'c', 'c', 's', 'z', 'E', 'x', 'k'],
    ['a', 'c', 'c', 't', 'u', 'v', 'w', 'j'],
    ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i'],
  ].map((line, y) => line.map((height, x) => new Node(x, y, height)));

  describe('findNode()', () => {
    it.each<[string, Coord]>([
      ['S', [0, 0]],
      ['a', [1, 0]],
      ['y', [4, 1]],
      ['E', [5, 2]],
    ])('should find the first occurrence of node', (char, coord) => {
      const node = findNode(grid, char);

      expect([node.x, node.y]).toStrictEqual(coord);
    });
  });

  describe('findStartNode()', () => {
    it('should find the start node', () => {
      const node = findStartNode(grid);

      expect([node.x, node.y]).toStrictEqual([0, 0]);
    });
  });

  describe('findEndNode()', () => {
    it('should find the end node', () => {
      const node = findEndNode(grid);

      expect([node.x, node.y]).toStrictEqual([5, 2]);
    });
  });
});
