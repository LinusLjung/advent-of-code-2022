import { Coord } from './types';

export function createKnots(amount: number) {
  return [...new Array(amount)].map<Coord>(() => ({
    x: 0,
    y: 0,
  }));
}
