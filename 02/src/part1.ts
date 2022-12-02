import { getPointsFromGame, Opponent, Player } from './getPointsFromGame';

export function part1(input: string) {
  const games = input
    .split('\n')
    .map((game) => game.split('').filter((item) => item !== ' '))
    .filter((game) => game.length);

  return games
    .map((game) =>
      getPointsFromGame(
        game[1] as unknown as Player,
        game[0] as unknown as Opponent
      )
    )
    .reduce((acc, curr) => acc + curr);
}
