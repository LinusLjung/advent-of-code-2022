import { getSteps } from './getSteps';

describe('getSteps()', () => {
  it('should parse the input and return the steps', () => {
    const input = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
move 11 from 1 to 1`;

    expect(getSteps(input)).toStrictEqual([
      {
        count: 1,
        from: 2,
        to: 1,
      },
      {
        count: 3,
        from: 1,
        to: 3,
      },
      {
        count: 2,
        from: 2,
        to: 1,
      },
      {
        count: 1,
        from: 1,
        to: 2,
      },
      {
        count: 11,
        from: 1,
        to: 1,
      },
    ]);
  });
});
