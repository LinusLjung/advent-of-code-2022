import { getOrderOfPair } from './pairIsInOrder';
import { Packet } from './types';

export function sortPackets(packets: Packet[]): Packet[] {
  return packets.sort(getOrderOfPair);
}
