import { getItemsOnRow } from './getItemsOnRow';
import { Stacks } from './types';

export function getStacksFromInput(input: string): Stacks {
  const rows = input.split('\n');

  return rows
    .slice(0, rows.length - 1)
    .reverse()
    .reduce<Record<number, string[]>>((acc, curr) => {
      const items = getItemsOnRow(curr);

      items.forEach((item, i) => {
        if (!item) {
          return;
        }

        if (!acc[i]) {
          acc[i] = [];
        }

        acc[i].push(item);
      });

      return acc;
    }, {});
}
