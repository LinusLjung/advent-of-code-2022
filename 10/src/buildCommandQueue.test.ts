import { buildCommandQueue } from './buildCommandQueue';

describe('buildCommandQueue()', () => {
  it('should return a queue of commands', () => {
    const input = `addx 15
addx -11
noop
addx 6`;

    expect(buildCommandQueue(input)).toStrictEqual<
      ReturnType<typeof buildCommandQueue>
    >([
      {
        index: 1,
        command: ['addx', 15],
      },
      {
        index: 3,
        command: ['addx', -11],
      },
      {
        index: 6,
        command: ['addx', 6],
      },
    ]);
  });
});
