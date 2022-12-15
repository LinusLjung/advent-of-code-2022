export function getRange(start: number, end: number): number[] {
  const diff = Math.abs(start - end);
  const range = [];

  for (let i = 0; i <= diff; i++) {
    range.push(Math.min(start, end) + i);
  }

  return range;
}
