import { getRange } from './getRange';

describe('getRange()', () => {
  it.each([
    [0, 5, [0, 1, 2, 3, 4, 5]],
    [-2, 2, [-2, -1, 0, 1, 2]],
    [-2, -5, [-5, -4, -3, -2]],
  ])(
    'should return the range of values from start to end',
    (start, end, expected) => {
      expect(getRange(start, end)).toStrictEqual(
        expect.arrayContaining(expected)
      );
    }
  );
});
