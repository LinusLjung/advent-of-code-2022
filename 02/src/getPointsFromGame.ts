import { getResult } from './getResult';

export type Player = 'X' | 'Y' | 'Z';
export type Opponent = 'A' | 'B' | 'C';

export const moveMap: Record<'rock' | 'paper' | 'scissors', number> = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const scoreMap: Record<Player | Opponent, number> = {
  A: moveMap.rock,
  X: moveMap.rock,
  B: moveMap.paper,
  Y: moveMap.paper,
  C: moveMap.scissors,
  Z: moveMap.scissors,
};

export enum Result {
  Win,
  Loss,
  Draw,
}

const resultScoreMap: Record<Result, number> = {
  [Result.Win]: 6,
  [Result.Draw]: 3,
  [Result.Loss]: 0,
};

export function getPointsFromGame(player: Player, opponent: Opponent) {
  const playerMoveScore = scoreMap[player];
  const opponentMoveScore = scoreMap[opponent];
  const result = getResult(playerMoveScore, opponentMoveScore);

  return playerMoveScore + resultScoreMap[result];
}
