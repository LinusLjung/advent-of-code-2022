import { Stacks, Step } from './types';

export function doStep(stacks: Stacks, { from, to, count }: Step): Stacks {
  const newStacks = { ...stacks };

  from = from - 1;
  to = to - 1;

  if (from === to) {
    return newStacks;
  }

  const fromStack = newStacks[from] ? [...newStacks[from]] : [];
  const toStack = newStacks[to] ? [...newStacks[to]] : [];

  for (let i = 0; i < count; i++) {
    const item = fromStack.pop();

    if (!item) {
      break;
    }

    toStack.push(item);
  }

  return {
    ...stacks,
    [from]: fromStack,
    [to]: toStack,
  };
}
