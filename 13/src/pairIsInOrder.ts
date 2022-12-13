import { Order, Packet } from './types';

function compareNumbers(left: number, right: number): Order {
  if (left > right) {
    return Order.Right;
  }

  if (left < right) {
    return Order.Left;
  }

  return Order.Equal;
}

export function getOrderOfPair(a: Packet, b: Packet): Order {
  for (let i = 0; i < a.length; i++) {
    const left = a[i];
    const right = b[i];

    if (right == null) {
      return Order.Right;
    }

    if (typeof left === 'number' && typeof right === 'number') {
      const result = compareNumbers(left, right);

      if (result === Order.Equal) {
        continue;
      }

      return result;
    }

    if (Array.isArray(left) && Array.isArray(right)) {
      const order = getOrderOfPair(left, right);

      if (order === Order.Equal) {
        continue;
      }

      return order;
    }

    if (typeof left === 'number') {
      const order = getOrderOfPair([left], right as Packet);

      if (order === Order.Equal) {
        continue;
      }

      return order;
    }

    if (typeof right === 'number') {
      const order = getOrderOfPair(left, [right]);

      if (order === Order.Equal) {
        continue;
      }

      return order;
    }
  }

  if (a.length < b.length) {
    return Order.Left;
  }

  return Order.Equal;
}
