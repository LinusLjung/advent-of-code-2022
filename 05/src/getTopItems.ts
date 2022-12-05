export function getTopItems(stacks: Record<number, string[]>): string[] {
  return Object.entries(stacks)
    .sort(([a], [b]) => Number(a) - Number(b))
    .filter(([, stack]) => stack?.length)
    .map(([, stack]) => stack.at(-1) as string);
}
