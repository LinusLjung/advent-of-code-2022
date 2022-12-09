import { getHighest } from '../../01/src/getHighest';
import { getGrid } from './getGrid';
import { getScenicScore } from './getScenicScore';

export function part2(input: string) {
  return getHighest(
    getGrid(input).reduce(
      (acc, row, y, grid) => [
        ...acc,
        ...row.map((_, x) => getScenicScore(grid, x, y)),
      ],
      []
    )
  );
}
