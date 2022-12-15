import { Coord } from './types';

export function coordIsOutOfBounds(coord: Coord, limit: number) {
  return coord[1] >= limit;
}
