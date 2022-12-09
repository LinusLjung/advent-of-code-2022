import { isAdjacent } from './isAdjacent';
import { Coord } from './types';

export function moveTail(head: Coord, tail: Coord): Coord {
  if (isAdjacent(head, tail)) {
    return tail;
  }

  const newTail = { ...tail };

  if (head.x !== tail.x) {
    newTail.x += 1 * (head.x > tail.x ? 1 : -1);
  }

  if (head.y !== tail.y) {
    newTail.y += 1 * (head.y > tail.y ? 1 : -1);
  }

  return newTail;
}

export function doMove(
  head: Coord,
  tail: Coord,
  direction: string
): { head: Coord; tail: Coord } {
  const newHead = { ...head };

  switch (direction) {
    case 'U':
      newHead.y++;
      break;
    case 'D':
      newHead.y--;
      break;
    case 'L':
      newHead.x--;
      break;
    case 'R':
      newHead.x++;
      break;
  }

  return { head: newHead, tail: moveTail(newHead, tail) };
}
