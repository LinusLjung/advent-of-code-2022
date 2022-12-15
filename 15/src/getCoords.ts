import { Coord } from './types';

export function getCoords<T = [Coord, Coord]>(input: string): T {
  return input.split(':').map((part) => {
    const regex = /[xy]=([\-]?\d+)/g;
    let x = Number(regex.exec(part)?.[1]);
    let y = Number(regex.exec(part)?.[1]);

    return [x, y];
  }) as T;
}
