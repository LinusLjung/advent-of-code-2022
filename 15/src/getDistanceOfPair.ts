import { Coord } from './types';

export function getDistanceOfPair([a, b]: [Coord, Coord]) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}
