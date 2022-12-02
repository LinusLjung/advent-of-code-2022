import { moveMap } from './consts';
import { getGames } from './getGames';
import { getPointsFromGame } from './getPointsFromGame';
import { InputOpponent, InputPlayer } from './types';

export function part1(input: string) {
  const games = getGames(input);

  return games
    .map((game) =>
      getPointsFromGame(
        moveMap[game[1] as unknown as InputPlayer],
        moveMap[game[0] as unknown as InputOpponent]
      )
    )
    .reduce((acc, curr) => acc + curr);
}
