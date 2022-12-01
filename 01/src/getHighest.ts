export function getHighest(numbers: number[]) {
  return numbers.reduce((acc, curr) => Math.max(acc, curr));
}
