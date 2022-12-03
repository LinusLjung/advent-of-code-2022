export function splitGroups(list: string[]): [string, string, string][] {
  const groups = [];

  for (let i = 0; i < list.length; i += 3) {
    groups.push(list.slice(i, i + 3) as [string, string, string]);
  }

  return groups;
}
