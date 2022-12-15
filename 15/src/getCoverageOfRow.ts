import { getCoords } from './getCoords';
import { getCoverageOfSensor } from './getCoverageOfSensor';
import { getDistanceOfPair } from './getDistanceOfPair';
import { Sensor } from './types';

export function getCoverageOfRow(input: string, row: number) {
  const pairs = input.split('\n').map(getCoords);
  const sensors: Sensor[] = pairs.map<Sensor>((pair) => ({
    sensor: pair[0],
    range: getDistanceOfPair(pair),
  }));
  const beaconsInRow = new Set(
    pairs
      .filter(([, beacon]) => beacon[1] === row)
      .map(([, beacon]) => beacon.join(','))
  );

  const coverage = new Set<string>();

  sensors.forEach((sensor) => getCoverageOfSensor(sensor, row, coverage));
  beaconsInRow.forEach((beacon) => coverage.delete(beacon));

  return coverage.size;
}
