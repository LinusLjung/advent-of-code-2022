export function getTopNumbers(numbers: number[], count: number) {
  return [...numbers]
    .sort((a, b) => (a === b ? 0 : a < b ? 1 : -1))
    .slice(0, count);
}
