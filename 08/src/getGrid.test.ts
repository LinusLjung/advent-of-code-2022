import { getGrid } from './getGrid';

describe('getGrid()', () => {
  it('should return a grid based on the input', () => {
    const input = `30373
25512
65332
33549
35390`;

    expect(getGrid(input)).toStrictEqual([
      [3, 0, 3, 7, 3],
      [2, 5, 5, 1, 2],
      [6, 5, 3, 3, 2],
      [3, 3, 5, 4, 9],
      [3, 5, 3, 9, 0],
    ]);
  });
});
