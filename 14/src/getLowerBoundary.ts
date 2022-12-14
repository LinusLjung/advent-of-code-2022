import { Coord } from './types';

export function getLowerBoundary(coords: Coord[]): number {
  return coords.reduce((acc, curr) => Math.max(acc, curr[1]), -Infinity);
}
