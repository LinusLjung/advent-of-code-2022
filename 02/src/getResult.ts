import { Result, moveMap } from './getPointsFromGame';

export function getResult(player: number, opponent: number): Result {
  if (player === moveMap.rock && opponent === moveMap.scissors) {
    return Result.Win;
  }

  if (player === moveMap.scissors && opponent === moveMap.rock) {
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
