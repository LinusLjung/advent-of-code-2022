import { chooseMove } from './chooseMove';
import { Move, Result } from './types';

describe('chooseMove()', () => {
  it.each<[Result, Move, Move]>([
    [Result.Loss, Move.Rock, Move.Scissors],
    [Result.Loss, Move.Paper, Move.Rock],
    [Result.Loss, Move.Scissors, Move.Paper],
    [Result.Draw, Move.Rock, Move.Rock],
    [Result.Draw, Move.Paper, Move.Paper],
    [Result.Draw, Move.Scissors, Move.Scissors],
    [Result.Win, Move.Rock, Move.Paper],
    [Result.Win, Move.Paper, Move.Scissors],
    [Result.Win, Move.Scissors, Move.Rock],
  ])(
    'should choose move to get the desired outcome',
    (desiredResult, opponent, expected) => {
      expect(chooseMove(desiredResult, opponent)).toBe(expected);
    }
  );
});
