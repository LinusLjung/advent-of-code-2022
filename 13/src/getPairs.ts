import { PacketPair, Packet } from './types';

function getPacket(packet: string): Packet {
  return eval(packet);
}

export function getPairs<T = PacketPair[]>(input: string): T {
  return input
    .split('\n\n')
    .map((pair) => pair.split('\n').map(getPacket)) as T;
}
