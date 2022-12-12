import { Node } from './Node';

export function getSortedQueue(queue: Node[]): Node[] {
  queue = queue.sort((a, b) => {
    const fDiff = a.fCost - b.fCost;

    if (fDiff === 0) {
      return a.hCost! - b.hCost!;
    }

    return fDiff;
  });

  return queue;
}
