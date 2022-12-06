import { findMarker } from './findMarker';

describe('findMarker()', () => {
  it.each([
    ['mjqjpqmgbljsphdztnvjfqwrcgsmlb', 7],
    ['bvwbjplbgvbhsrlpgdmjqwftvncz', 5],
    ['nppdvjthqldpwncqszvftbrmjlhg', 6],
    ['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 10],
    ['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 11],
    ['zcfqfwzzqfrljwzlrfnpqdbhtmscgvjw', 4],
    ['aaaaaabcd', 9],
    ['abcd', 4],
  ])('should find the first marker in the message', (input, expected) => {
    expect(findMarker(input)).toBe(expected);
  });

  it.each([
    ['mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14, 19],
    ['bvwbjplbgvbhsrlpgdmjqwftvncz', 14, 23],
    ['nppdvjthqldpwncqszvftbrmjlhg', 14, 23],
    ['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14, 29],
    ['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14, 26],
  ])('should handle different marker lengths', (input, length, expected) => {
    expect(findMarker(input, length)).toBe(expected);
  });
});
