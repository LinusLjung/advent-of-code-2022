import { isVisible } from './isVisible';
import { Grid } from './types';

const grid: Grid = [
  [3, 0, 3, 7, 3],
  [6, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 5, 5, 4, 9],
  [3, 5, 3, 9, 0],
];

describe('isVisible()', () => {
  it.each([
    [0, 0, true],
    [1, 4, true],
    [1, 1, true],
    [2, 1, true],
    [3, 1, false],
    [1, 2, true],
    [2, 2, false],
    [3, 2, true],
    [1, 3, true],
    [2, 3, true],
    [3, 3, false],
  ])('should return true if tree is visible', (x, y, expected) => {
    expect(isVisible(grid, x, y)).toBe(expected);
  });
});
