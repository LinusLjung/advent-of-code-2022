import { getGroups } from './getGroups';
import { getSums } from './getSums';
import { getTopNumbers } from './getTopNumbers';

export function part2(input: string) {
  return getTopNumbers(getSums(getGroups(input)), 3).reduce(
    (acc, curr) => acc + curr
  );
}
