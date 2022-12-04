import { getRanges } from './getRanges';
import { hasOverlap } from './hasOverlap';

export function part2(input: string): number {
  return input
    .split('\n')
    .map(getRanges)
    .filter(([a, b]) => {
      return hasOverlap(a, b);
    }).length;
}
