import { doStep } from './doStep';
import { Stacks, Step } from './types';

describe('doStep()', () => {
  it.each<[Stacks, Step, Stacks]>([
    [
      {
        0: ['Z', 'N'],
        1: ['M', 'C', 'D'],
        2: ['P'],
      },
      {
        count: 1,
        from: 1,
        to: 1,
      },
      {
        0: ['Z', 'N'],
        1: ['M', 'C', 'D'],
        2: ['P'],
      },
    ],
    [
      {
        0: ['Z', 'N'],
        1: ['M', 'C', 'D'],
        2: ['P'],
      },
      {
        count: 1,
        from: 2,
        to: 1,
      },
      {
        0: ['Z', 'N', 'D'],
        1: ['M', 'C'],
        2: ['P'],
      },
    ],
    [
      {
        0: ['Z', 'N', 'D'],
        1: ['M', 'C'],
        2: ['P'],
      },
      {
        count: 3,
        from: 1,
        to: 3,
      },
      {
        0: [],
        1: ['M', 'C'],
        2: ['P', 'D', 'N', 'Z'],
      },
    ],
    [
      {
        0: [],
        1: ['M', 'C'],
        2: ['P', 'D', 'N', 'Z'],
      },
      {
        count: 2,
        from: 2,
        to: 1,
      },
      {
        0: ['C', 'M'],
        1: [],
        2: ['P', 'D', 'N', 'Z'],
      },
    ],
    [
      {
        0: ['C', 'M'],
        1: [],
        2: ['P', 'D', 'N', 'Z'],
      },
      {
        count: 1,
        from: 1,
        to: 2,
      },
      {
        0: ['C'],
        1: ['M'],
        2: ['P', 'D', 'N', 'Z'],
      },
    ],
  ])(
    'should move the items according to the step instructions',
    (stack, step, expected) => {
      expect(doStep(stack, step)).toStrictEqual(expected);
    }
  );
});
