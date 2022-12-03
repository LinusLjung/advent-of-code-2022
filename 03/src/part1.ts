import { findDuplicates } from './findDuplicates';
import { getCharPriority } from './getCharPriority';
import { splitString } from './splitString';

function sumArray(array: number[]): number {
  return array.reduce((acc, curr) => acc + curr);
}

export function part1(input: string) {
  return sumArray(
    input
      .split('\n')
      .map(splitString)
      .map(findDuplicates)
      .map((duplicates) => sumArray(duplicates.map(getCharPriority)))
  );
}
