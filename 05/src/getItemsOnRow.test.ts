import { getItemsOnRow } from './getItemsOnRow';

describe('getItemsOnRow()', () => {
  it.each([
    ['    [D]    ', [null, 'D', null]],
    ['[N] [C]    ', ['N', 'C', null]],
    ['[Z] [M] [P]', ['Z', 'M', 'P']],
  ])(
    'it should parse the input row and return an array of all items',
    (input, expected) => {
      expect(getItemsOnRow(input)).toStrictEqual(expected);
    }
  );
});
