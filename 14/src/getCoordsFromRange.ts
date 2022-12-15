import { getRange } from './getRange';
import { Coord } from './types';

export function getCoordsFromRange(range: string): Coord[] {
  const links = range
    .split(' -> ')
    .map((link) => link.split(',').map(Number) as [number, number]);

  const coords: Coord[] = [];

  for (let i = 1; i < links.length; i++) {
    let [startX, startY] = links[i - 1];
    let [endX, endY] = links[i];

    if (startX === endX) {
      getRange(startY, endY).forEach((y) => coords.push([startX, y]));
    }

    if (startY === endY) {
      getRange(startX, endX).forEach((x) => coords.push([x, startY]));
    }
  }

  return [...coords];
}
