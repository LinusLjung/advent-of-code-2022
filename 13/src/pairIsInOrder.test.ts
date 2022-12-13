import { getOrderOfPair } from './pairIsInOrder';
import { Order, Packet } from './types';

describe('pairIsInOrder()', () => {
  it.each<[Packet, Packet, Order]>([
    [[1, 1, 3, 1, 1], [1, 1, 5, 1, 1], Order.Left],
    [[[1], [2, 3, 4]], [[1], 4], Order.Left],
    [[9], [[8, 7, 6]], Order.Right],
    [[[4, 4], 4, 4], [[4, 4], 4, 4, 4], Order.Left],
    [[7, 7, 7, 7], [7, 7, 7], Order.Right],
    [[7, 7, 7, 4], [7, 7, 7, 4], Order.Equal],
    [[], [3], Order.Left],
    [[[[]]], [[]], Order.Right],
    [
      [1, [2, [3, [4, [5, 6, 7]]]], 8, 9],
      [1, [2, [3, [4, [5, 6, 0]]]], 8, 9],
      Order.Right,
    ],
  ])('should return true if the pair is in order', (a, b, expected) => {
    expect(getOrderOfPair(a, b)).toBe(expected);
  });
});
