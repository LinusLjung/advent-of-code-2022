import { Move, InputOpponent, InputPlayer } from './types';

export const moveScores: Record<'rock' | 'paper' | 'scissors', number> = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

export const moveMap: Record<InputOpponent | InputPlayer, Move> = {
  A: Move.Rock,
  X: Move.Rock,
  B: Move.Paper,
  Y: Move.Paper,
  C: Move.Scissors,
  Z: Move.Scissors,
};

export const scoreMap: Record<Move, number> = {
  [Move.Rock]: moveScores.rock,
  [Move.Paper]: moveScores.paper,
  [Move.Scissors]: moveScores.scissors,
};
