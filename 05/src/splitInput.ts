export function splitInput(input: string): [string, string] {
  const split = input.split('\n\n');

  return [split[0], split[1]];
}
