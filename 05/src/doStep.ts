import { Stacks, Step } from './types';

export function doStep(
  stacks: Stacks,
  { from, to, count }: Step,
  method: 'single' | 'multiple' = 'single'
): Stacks {
  const newStacks = { ...stacks };

  from = from - 1;
  to = to - 1;

  if (from === to) {
    return newStacks;
  }

  const fromStack = newStacks[from] ? [...newStacks[from]] : [];
  const toStack = newStacks[to] ? [...newStacks[to]] : [];

  if (method === 'single') {
    for (let i = 0; i < count; i++) {
      const item = fromStack.pop();

      if (!item) {
        break;
      }

      toStack.push(item);
    }
  } else {
    toStack.push(...fromStack.splice(-count));
  }

  return {
    ...stacks,
    [from]: fromStack,
    [to]: toStack,
  };
}
