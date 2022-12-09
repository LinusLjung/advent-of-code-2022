export type Grid = number[][];
export type TreeFunction<T> = (grid: Grid, x: number, y: number) => T;
