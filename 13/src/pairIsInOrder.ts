import { Packet } from './types';

function compareNumbers(left: number, right: number): boolean | void {
  if (left > right) {
    return false;
  }

  if (left < right) {
    return true;
  }
}

export function pairIsInOrder(a: Packet, b: Packet): boolean | void {
  for (let i = 0; i < a.length; i++) {
    const left = a[i];
    const right = b[i];

    if (right == null) {
      return false;
    }

    if (typeof left === 'number' && typeof right === 'number') {
      const result = compareNumbers(left, right);

      if (result == null) {
        continue;
      }

      return result;
    }

    if (Array.isArray(left) && Array.isArray(right)) {
      const result = pairIsInOrder(left, right);

      if (result == null) {
        continue;
      }

      return result;
    }

    if (typeof left === 'number') {
      const result = pairIsInOrder([left], right as Packet);

      if (result == null) {
        continue;
      }

      return result;
    }

    if (typeof right === 'number') {
      const result = pairIsInOrder(left, [right]);

      if (result == null) {
        continue;
      }

      return result;
    }
  }

  if (a.length < b.length) {
    return true;
  }
}
