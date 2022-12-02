export function getGames(input: string) {
  return input
    .split('\n')
    .map((game) => game.split('').filter((item) => item !== ' '))
    .filter((game) => game.length) as [string, string][];
}
