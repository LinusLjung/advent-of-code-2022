import { Grid } from './types';

export function getGrid(input: string): Grid {
  return input.split('\n').map((row) => row.split('').map(Number));
}
