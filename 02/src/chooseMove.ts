import { Move, Result } from './types';

export function chooseMove(desiredResult: Result, opponent: Move): Move {
  if (desiredResult === Result.Draw) {
    return opponent;
  }

  if (desiredResult === Result.Loss) {
    return (opponent - 1 + Move.Scissors + 1) % (Move.Scissors + 1);
  }

  return (opponent + 1) % (Move.Scissors + 1);
}
