import { getTopNumbers } from './getTopNumbers';

describe('getTopNumbers()', () => {
  it.each([
    [1, [24000]],
    [2, [24000, 11000]],
    [3, [24000, 11000, 10000]],
  ])(
    'should get top x numbers in list',
    (count: number, expected: number[]) => {
      expect(
        getTopNumbers([6000, 4000, 11000, 24000, 10000], count)
      ).toStrictEqual(expect.arrayContaining(expected));
    }
  );
});
