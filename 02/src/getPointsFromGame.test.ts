import { getPointsFromGame } from './getPointsFromGame';
import { Move } from './types';

describe('getPointsFromGame()', () => {
  it.each<[Move, Move, number]>([
    [Move.Rock, Move.Rock, 4],
    [Move.Rock, Move.Paper, 1],
    [Move.Rock, Move.Scissors, 7],
    [Move.Paper, Move.Rock, 8],
    [Move.Paper, Move.Paper, 5],
    [Move.Paper, Move.Scissors, 2],
    [Move.Scissors, Move.Rock, 3],
    [Move.Scissors, Move.Paper, 9],
    [Move.Scissors, Move.Scissors, 6],
  ])(
    'should return the points from a single game',
    (player, opponent, expected) => {
      expect(getPointsFromGame(player, opponent)).toBe(expected);
    }
  );
});
