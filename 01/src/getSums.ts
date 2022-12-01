export function getSums(groups: number[][]) {
  return groups.map((group) => group.reduce((acc, curr) => acc + curr));
}
