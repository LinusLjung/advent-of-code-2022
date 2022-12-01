import { getGroups } from './getGroups';
import { getHighest } from './getHighest';
import { getSums } from './getSums';

export function part1(input: string) {
  return getHighest(getSums(getGroups(input)));
}
