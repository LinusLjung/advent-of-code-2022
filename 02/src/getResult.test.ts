import { moveScores } from './consts';
import { getResult } from './getResult';
import { Result } from './types';

describe('getResult()', () => {
  it.each<[number, number, Result]>([
    [moveScores.paper, moveScores.rock, Result.Win],
    [moveScores.rock, moveScores.paper, Result.Loss],
    [moveScores.rock, moveScores.scissors, Result.Win],
    [moveScores.scissors, moveScores.scissors, Result.Draw],
  ])(
    'should return the result of a single game',
    (player, opponent, expected) => {
      expect(getResult(player, opponent)).toBe(expected);
    }
  );
});
