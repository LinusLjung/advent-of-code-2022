import { Step } from './types';

function getStep<T = [number, number, number]>(row: string): T {
  return [...row.matchAll(/\d+/g)].map(([match]) => Number(match)) as T;
}

export function getSteps(input: string): Step[] {
  return input
    .split('\n')
    .map(getStep)
    .map(([count, from, to]) => ({ count, from, to }));
}
