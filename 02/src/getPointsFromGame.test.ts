import { getPointsFromGame, Opponent, Player } from './getPointsFromGame';

describe('getPointsFromGame()', () => {
  it.each<[Player, Opponent, number]>([
    ['X', 'A', 4],
    ['X', 'B', 1],
    ['X', 'C', 7],
    ['Y', 'A', 8],
    ['Y', 'B', 5],
    ['Y', 'C', 2],
    ['Z', 'A', 3],
    ['Z', 'B', 9],
    ['Z', 'C', 6],
  ])(
    'should return the points from a single game',
    (player, opponent, expected) => {
      expect(getPointsFromGame(player, opponent)).toBe(expected);
    }
  );
});
