import { Sensor } from './types';

export function getCoverageOfSensor(
  { sensor, range }: Sensor,
  targetRow: number,
  currentCoverage: Set<string>
): undefined {
  if (sensor[1] + range < targetRow || sensor[1] - range > targetRow) {
    return;
  }

  for (let y = sensor[1] - range; y <= sensor[1] + range; y++) {
    if (y !== targetRow) {
      continue;
    }

    const centerDistance = Math.abs(y - sensor[1]);

    if (y !== sensor[1]) {
      currentCoverage.add(`${sensor[0]},${y}`);
    }

    for (let i = 1; i <= range - centerDistance; i++) {
      currentCoverage.add(`${sensor[0] - i},${y}`);
      currentCoverage.add(`${sensor[0] + i},${y}`);
    }
  }
}
