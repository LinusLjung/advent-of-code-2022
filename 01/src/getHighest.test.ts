import { getHighest } from './getHighest';

describe('getHighest()', () => {
  it('should return the highest number in the list', () => {
    const input = [6000, 4000, 11000, 24000, 10000];

    expect(getHighest(input)).toBe(24000);
  });
});
