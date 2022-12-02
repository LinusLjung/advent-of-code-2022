import { moveMap, Result } from './getPointsFromGame';
import { getResult } from './getResult';

describe('getResult()', () => {
  it.each<[number, number, Result]>([
    [moveMap.paper, moveMap.rock, Result.Win],
    [moveMap.rock, moveMap.paper, Result.Loss],
    [moveMap.rock, moveMap.scissors, Result.Win],
    [moveMap.scissors, moveMap.scissors, Result.Draw],
  ])(
    'should return the result of a single game',
    (player, opponent, expected) => {
      expect(getResult(player, opponent)).toBe(expected);
    }
  );
});
