import { getPairs } from './getPairs';
import { sortPackets } from './sortPackets';
import { Packet } from './types';

export function part2(input: string) {
  const packets = getPairs(input).reduce<Packet[]>(
    (acc, curr) => [...acc, ...curr],
    []
  );

  const divider1: Packet = [[2]];
  const divider2: Packet = [[6]];

  packets.push(divider1, divider2);

  return sortPackets(packets).reduce<number>((acc, curr, i) => {
    if ([divider1, divider2].includes(curr)) {
      return acc * (i + 1);
    }

    return acc;
  }, 1);
}
