import { SectionRange } from './types';

export function hasOverlap(a: SectionRange, b: SectionRange): boolean {
  return a[1] >= b[0] && a[0] <= b[1];
}
