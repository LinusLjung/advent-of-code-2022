import { getGames } from './getGames';

describe('getGames()', () => {
  it('should parse the input and return a list of all games', () => {
    const input = `A Y
B Z
C Y
B Y
A Y
A Y
A X
A Y
B Z
A Y`;

    expect(getGames(input)).toStrictEqual([
      ['A', 'Y'],
      ['B', 'Z'],
      ['C', 'Y'],
      ['B', 'Y'],
      ['A', 'Y'],
      ['A', 'Y'],
      ['A', 'X'],
      ['A', 'Y'],
      ['B', 'Z'],
      ['A', 'Y'],
    ]);
  });
});
