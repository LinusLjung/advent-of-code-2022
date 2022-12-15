import { getCoords } from './getCoords';
import { getCoverageOfRow } from './getCoverageOfRow';
import { getDistanceOfPair } from './getDistanceOfPair';
import { Sensor } from './types';

export function part1(input: string, row = 2000000) {
  return getCoverageOfRow(input, row);
}
