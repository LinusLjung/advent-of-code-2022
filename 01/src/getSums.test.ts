import { getSums } from './getSums';

describe('getSums()', () => {
  it('should sum the items in each group', () => {
    const groups = [
      [1000, 2000, 3000],
      [4000],
      [5000, 6000],
      [7000, 8000, 9000],
      [10000],
    ];

    expect(getSums(groups)).toStrictEqual([6000, 4000, 11000, 24000, 10000]);
  });
});
