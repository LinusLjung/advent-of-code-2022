import {
  getBottomScore,
  getLeftScore,
  getRightScore,
  getScenicScore,
  getTopScore,
} from './getScenicScore';
import { Grid } from './types';

const grid: Grid = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0],
];

describe('getScenicScore', () => {
  describe('getTopScore()', () => {
    it.each([
      [1, 1, 1],
      [2, 2, 1],
      [3, 2, 2],
      [3, 3, 3],
    ])('should return the scenic score for the top trees', (x, y, expected) => {
      expect(getTopScore(grid, x, y)).toBe(expected);
    });
  });

  describe('getBottomScore()', () => {
    it.each([
      [1, 1, 1],
      [2, 2, 1],
      [3, 2, 1],
      [3, 3, 1],
      [1, 2, 2],
    ])(
      'should return the scenic score for the bottom trees',
      (x, y, expected) => {
        expect(getBottomScore(grid, x, y)).toBe(expected);
      }
    );
  });

  describe('getLeftScore()', () => {
    it.each([
      [1, 1, 1],
      [2, 2, 1],
      [3, 2, 1],
      [3, 3, 1],
      [1, 2, 1],
      [3, 4, 3],
      [4, 3, 4],
    ])(
      'should return the scenic score for the left trees',
      (x, y, expected) => {
        expect(getLeftScore(grid, x, y)).toBe(expected);
      }
    );
  });

  describe('getRightScore()', () => {
    it.each([
      [1, 1, 1],
      [2, 2, 1],
      [3, 2, 1],
      [3, 3, 1],
      [1, 2, 3],
      [3, 4, 1],
      [4, 3, 0],
    ])(
      'should return the scenic score for the right trees',
      (x, y, expected) => {
        expect(getRightScore(grid, x, y)).toBe(expected);
      }
    );
  });

  describe('getScenicScore()', () => {
    it.each([
      [2, 1, 4],
      [2, 3, 8],
      [0, 2, 0],
      [2, 0, 0],
    ])('should return the scenic score of the given tree', (x, y, expected) => {
      expect(getScenicScore(grid, x, y)).toBe(expected);
    });
  });
});
