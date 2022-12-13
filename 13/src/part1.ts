import { getPairs } from './getPairs';
import { getOrderOfPair } from './pairIsInOrder';
import { Order } from './types';

export function part1(input: string) {
  const pairs = getPairs(input);

  return pairs
    .reduce<number[]>(
      (acc, pair, i) =>
        getOrderOfPair(...pair) === Order.Left ? [...acc, i + 1] : acc,
      []
    )
    .reduce((acc, curr) => acc + curr);
}
