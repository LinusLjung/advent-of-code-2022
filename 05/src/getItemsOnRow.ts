const COLUMN_WIDTH = 4;

export function getItemsOnRow(row: string): (string | null)[] {
  const rowArray: (string | null)[] = [];

  for (let i = 0; i < row.length; i += COLUMN_WIDTH) {
    const item = row.substring(i, i + COLUMN_WIDTH)[1];

    rowArray.push(item === ' ' ? null : item);
  }

  return rowArray;
}
