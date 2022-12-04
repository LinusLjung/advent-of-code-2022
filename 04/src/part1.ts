import { fullyContains } from './fullyContains';
import { getRanges } from './getRanges';

export function part1(input: string): number {
  return input
    .split('\n')
    .map(getRanges)
    .filter(([a, b]) => {
      return fullyContains(a, b) || fullyContains(b, a);
    }).length;
}
