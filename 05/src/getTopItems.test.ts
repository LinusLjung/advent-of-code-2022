import { getTopItems } from './getTopItems';

describe('getTopItems()', () => {
  it.each([
    [
      {
        0: ['Z', 'N'],
        1: ['M', 'C', 'D'],
        3: ['P'],
      },
      ['N', 'D', 'P'],
    ],
    [
      {
        0: [],
        1: ['M', 'C', 'D'],
        3: ['P'],
      },
      ['D', 'P'],
    ],
  ])('should return the top items from the stacks', (input, expected) => {
    expect(getTopItems(input)).toStrictEqual(expected);
  });
});
