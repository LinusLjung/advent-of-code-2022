import { getGroups } from './getGroups';

describe('getGroups()', () => {
  it('should divide the input into groups split by newlines', () => {
    const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;
    expect(getGroups(input)).toStrictEqual([
      [1000, 2000, 3000],
      [4000],
      [5000, 6000],
      [7000, 8000, 9000],
      [10000],
    ]);
  });
});
