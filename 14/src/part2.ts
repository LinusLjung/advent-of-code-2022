import { dropUnitOfSand } from './dropUnitOfSand';
import { getCoordsFromRange } from './getCoordsFromRange';
import { getLowerBoundary } from './getLowerBoundary';
import { Coord } from './types';

export function part2(input: string) {
  const obstacles = input
    .split('\n')
    .map(getCoordsFromRange)
    .reduce((acc, curr) => [...acc, ...curr], []);
  const boundary = getLowerBoundary(obstacles) + 1;
  const unitsOfSand: Coord[] = [];

  while (true) {
    const sand = dropUnitOfSand(obstacles, unitsOfSand, boundary);

    unitsOfSand.push(sand);

    if (sand[0] === 500 && sand[1] === 0) {
      break;
    }
  }

  return unitsOfSand.length;
}
