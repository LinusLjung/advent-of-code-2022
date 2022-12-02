import { scoreMap } from './consts';
import { getResult } from './getResult';
import { Move, Result } from './types';

const resultScoreMap: Record<Result, number> = {
  [Result.Win]: 6,
  [Result.Draw]: 3,
  [Result.Loss]: 0,
};

export function getPointsFromGame(player: Move, opponent: Move) {
  const playerMoveScore = scoreMap[player];
  const opponentMoveScore = scoreMap[opponent];
  const result = getResult(playerMoveScore, opponentMoveScore);

  return playerMoveScore + resultScoreMap[result];
}
