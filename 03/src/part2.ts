import { findSharedType } from './findSharedType';
import { getCharPriority } from './getCharPriority';
import { splitGroups } from './splitGroups';
import { sumArray } from './sumArray';

export function part2(input: string) {
  return sumArray(
    splitGroups(input.split('\n'))
      .map(findSharedType)
      .filter((char) => !!char)
      .map((char) => getCharPriority(char as string))
  );
}
