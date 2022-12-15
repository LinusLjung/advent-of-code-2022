import { coordIsOutOfBounds } from './coordIsOutOfBounds';
import { coordIsObstacle } from './part1';
import { Coord } from './types';

export function dropUnitOfSand(
  obstacles: Coord[],
  yLimit: number,
  start: Coord = [500, 0]
) {
  let resting = false;
  let currentCoord = start;

  while (!resting && !coordIsOutOfBounds(currentCoord, yLimit)) {
    const targetY = currentCoord[1] + 1;
    const targets: Coord[] = [
      [currentCoord[0], targetY],
      [currentCoord[0] - 1, targetY],
      [currentCoord[0] + 1, targetY],
    ];
    const validTargets = targets.filter(
      (target) => !coordIsObstacle(obstacles, target)
    );

    if (!validTargets.length) {
      resting = true;

      break;
    }

    currentCoord = validTargets[0];
  }

  return currentCoord;
}
