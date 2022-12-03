export function splitString(string: string): [string, string] {
  if (string.length % 2 === 1) {
    throw new Error(`String '${string}' can't be equally split`);
  }

  const middleLength = string.length / 2;

  return [string.substring(0, middleLength), string.substring(middleLength)];
}
