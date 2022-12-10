export type Command = ['noop'] | ['addx', number];

export function getCommand(line: string): Command {
  const [command, arg] = line.split(' ');

  if (command === 'noop') {
    return ['noop'];
  }

  return ['addx', Number(arg)];
}
