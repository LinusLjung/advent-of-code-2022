import { Command, getCommand } from './getCommand';

describe('getCommand()', () => {
  it.each<[string, Command]>([
    ['addx -15', ['addx', -15]],
    ['addx 0', ['addx', 0]],
    ['addx 3', ['addx', 3]],
    ['noop', ['noop']],
  ])('should return the command from the input line', (line, command) => {
    expect(getCommand(line)).toStrictEqual(command);
  });
});
