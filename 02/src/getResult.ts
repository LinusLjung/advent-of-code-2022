import { moveScores } from './consts';
import { Result } from './types';

export function getResult(player: number, opponent: number): Result {
  if (player === moveScores.rock && opponent === moveScores.scissors) {
    return Result.Win;
  }

  if (player === moveScores.scissors && opponent === moveScores.rock) {
    return Result.Loss;
  }

  if (player > opponent) {
    return Result.Win;
  }

  if (player < opponent) {
    return Result.Loss;
  }

  return Result.Draw;
}
