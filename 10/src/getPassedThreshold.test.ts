import { getPassedThreshold } from './getPassedThreshold';

describe('getPassedThreshold()', () => {
  it.each([
    [19, 20, 20],
    [19, 21, 20],
    [20, 21, null],
    [37, 40, null],
    [40, 41, null],
    [57, 60, 60],
    [99, 102, 100],
    [100, 101, null],
  ])(
    'should return the passed threshold, or null',
    (previousCycle, cycle, expected) => {
      expect(getPassedThreshold(cycle, previousCycle)).toBe(expected);
    }
  );
});
