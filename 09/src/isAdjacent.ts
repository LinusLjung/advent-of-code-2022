import { Coord } from './types';

function diffIsAdjacent(diff: number) {
  return diff <= 1 && diff >= -1;
}

export function isAdjacent(head: Coord, tail: Coord) {
  return diffIsAdjacent(head.x - tail.x) && diffIsAdjacent(head.y - tail.y);
}
