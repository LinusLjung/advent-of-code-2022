import { doMove } from './doMove';
import { Coord } from './types';

function coordToString({ x, y }: Coord): string {
  return `${x},${y}`;
}

export function part1(input: string) {
  let head: Coord = { x: 0, y: 0 };
  let tail: Coord = { x: 0, y: 0 };

  const visitedCoords = new Set<string>([coordToString(tail)]);

  input.split('\n').forEach((move) => {
    const splitMove = move.split(' ');
    const direction = splitMove[0];
    const distance = Number(splitMove[1]);

    for (let i = 0; i < distance; i++) {
      const { head: newHead, tail: newTail } = doMove(head, tail, direction);

      head = newHead;
      tail = newTail;

      visitedCoords.add(coordToString(newTail));
    }
  });

  return visitedCoords.size;
}
