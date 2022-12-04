import { getRanges } from './getRanges';

describe('getRanges', () => {
  it.each([
    [
      '2-4,6-8',
      [
        [2, 4],
        [6, 8],
      ],
    ],
    [
      '2-3,4-5',
      [
        [2, 3],
        [4, 5],
      ],
    ],
    [
      '5-7,7-9',
      [
        [5, 7],
        [7, 9],
      ],
    ],
    [
      '2-8,3-7',
      [
        [2, 8],
        [3, 7],
      ],
    ],
    [
      '6-6,4-6',
      [
        [6, 6],
        [4, 6],
      ],
    ],
    [
      '2-6,4-8',
      [
        [2, 6],
        [4, 8],
      ],
    ],
  ])('should return the ranges from the input line', (input, expected) => {
    expect(getRanges(input)).toStrictEqual(expected);
  });
});
