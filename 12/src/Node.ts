import { findEndNode } from './findNode';
import { Grid } from './types';

export class Node {
  x: number;
  y: number;
  height: string;
  grid: Grid<Node> | null = null;
  gCost: number | null = null;
  hCost: number | null = null;
  visited = false;
  previousNode: Node | null = null;

  constructor(x: number, y: number, height: string) {
    this.x = x;
    this.y = y;
    this.height = height;
  }

  setGrid(grid: Grid<Node>) {
    this.grid = grid;
  }

  calculateCost(previousNode: Node) {
    const hCost = this.calculateHCost();
    const gCost = this.calculateGCost(previousNode);

    if (this.gCost == null || gCost < this.gCost) {
      this.gCost = gCost;
      this.previousNode = previousNode;
    }

    if (this.hCost == null) {
      this.hCost = hCost;
    }
  }

  calculateGCost(previousNode: Node): number {
    if (previousNode.gCost == null) {
      throw new Error(`Passed node has no g cost`);
    }

    return previousNode.gCost + 1;
  }

  calculateHCost(): number {
    if (!this.grid) {
      throw this.getMissingGridError();
    }

    return this.calculateCostToTarget(findEndNode(this.grid));
  }

  calculateCostToTarget({ x, y }: Node) {
    let cost = 0;

    cost += Math.abs(this.x - x);
    cost += Math.abs(this.y - y);

    return cost;
  }

  get fCost(): number {
    if (this.gCost == null || this.hCost == null) {
      throw new Error(`g cost and h cost has not been calculated`);
    }

    return this.gCost + this.hCost;
  }

  findAdjacents(): Node[] {
    if (!this.grid) {
      throw this.getMissingGridError();
    }

    const nodes = [
      this.grid[this.y - 1]?.[this.x],
      this.grid[this.y + 1]?.[this.x],
      this.grid[this.y][this.x - 1],
      this.grid[this.y][this.x + 1],
    ].filter((node) => {
      if (!node || node.visited) {
        return false;
      }

      const destinationHeight = (
        node.height === 'E' ? 'z' : node.height
      ).charCodeAt(0);
      const thisHeight = (this.height === 'S' ? 'a' : this.height).charCodeAt(
        0
      );

      return thisHeight + 1 >= destinationHeight;
    });

    nodes.forEach((node) => node.calculateCost(this));

    return nodes;
  }

  getMissingGridError() {
    return new Error('Grid has not been supplied to node');
  }
}
