export type Packet = (number | Packet)[];
export type PacketPair = [Packet, Packet];
export enum Order {
  Left = -1,
  Equal,
  Right,
}
