import { coordToString } from './coordToString';
import { createKnots } from './createKnots';
import { doMove } from './doMove';

export function run(input: string, numberOfKnots: number) {
  let [head, ...tails] = createKnots(numberOfKnots);

  const visitedCoords = new Set<string>([coordToString(tails.at(-1)!)]);

  input.split('\n').forEach((move) => {
    const splitMove = move.split(' ');
    const direction = splitMove[0];
    const distance = Number(splitMove[1]);

    for (let i = 0; i < distance; i++) {
      const { head: newHead, tails: newTails } = doMove(head, tails, direction);

      head = newHead;
      tails = newTails;

      visitedCoords.add(coordToString(newTails.at(-1)!));
    }
  });

  return visitedCoords.size;
}
