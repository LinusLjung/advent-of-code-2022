import { hasDuplicates } from './hasDuplicates';

export function findMarker(input: string, markerLength = 4): number {
  for (let i = markerLength; i <= input.length; i++) {
    const marker = input.substring(i - markerLength, i);

    if (!hasDuplicates(marker)) {
      return i;
    }
  }
  return 0;
}
