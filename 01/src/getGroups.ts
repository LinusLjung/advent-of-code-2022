export function getGroups(input: string): number[][] {
  return input.split('\n\n').map((group) =>
    group
      .split('\n')
      .filter((item) => !!item)
      .map(Number)
  );
}
