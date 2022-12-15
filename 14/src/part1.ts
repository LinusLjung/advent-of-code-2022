import { coordIsOutOfBounds } from './coordIsOutOfBounds';
import { dropUnitOfSand } from './dropUnitOfSand';
import { getCoordsFromRange } from './getCoordsFromRange';
import { getLowerBoundary } from './getLowerBoundary';
import { Coord } from './types';

export function coordIsObstacle(obstacles: Coord[], coord: Coord) {
  return obstacles.some(
    (obstacle) => obstacle[0] === coord[0] && obstacle[1] === coord[1]
  );
}

export function part1(input: string) {
  const obstacles = input
    .split('\n')
    .map(getCoordsFromRange)
    .reduce((acc, curr) => [...acc, ...curr], []);
  const boundary = getLowerBoundary(obstacles);
  const unitsOfSand: Coord[] = [];

  while (true) {
    const sand = dropUnitOfSand([...obstacles, ...unitsOfSand], boundary);

    if (coordIsOutOfBounds(sand, boundary)) {
      break;
    }

    unitsOfSand.push(sand);
  }

  return unitsOfSand.length;
}
