import { Coord } from './types';

export function coordToString({ x, y }: Coord): string {
  return `${x},${y}`;
}
