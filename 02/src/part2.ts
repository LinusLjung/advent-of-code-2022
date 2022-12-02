import { chooseMove } from './chooseMove';
import { moveMap } from './consts';
import { getGames } from './getGames';
import { getPointsFromGame } from './getPointsFromGame';
import { InputResult, InputOpponent, Result } from './types';

const resultMap: Record<InputResult, Result> = {
  X: Result.Loss,
  Y: Result.Draw,
  Z: Result.Win,
};

export function part2(input: string) {
  const games = getGames(input) as [InputOpponent, InputResult][];

  return games
    .map(([opponent, inputResult]) => [
      chooseMove(resultMap[inputResult], moveMap[opponent]),
      moveMap[opponent],
    ])
    .map(([player, opponent]) => getPointsFromGame(player, opponent))
    .reduce((acc, curr) => acc + curr);
}
