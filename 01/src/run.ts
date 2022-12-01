import { getGroups } from './getGroups';
import { getHighest } from './getHighest';
import { getSums } from './getSums';

export function run(input: string) {
  return getHighest(getSums(getGroups(input)));
}
