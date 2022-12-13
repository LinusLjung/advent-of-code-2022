import { getPairs } from './getPairs';
import { pairIsInOrder } from './pairIsInOrder';

export function part1(input: string) {
  const pairs = getPairs(input);

  return pairs
    .reduce<number[]>(
      (acc, pair, i) => (pairIsInOrder(...pair) ? [...acc, i + 1] : acc),
      []
    )
    .reduce((acc, curr) => acc + curr);
}
