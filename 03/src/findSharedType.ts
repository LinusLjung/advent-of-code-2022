export function findSharedType([a, b, c]: [string, string, string]) {
  return [...a].find((char) => b.includes(char) && c.includes(char));
}
