import { commandLength } from './consts';
import { Command, getCommand } from './getCommand';

type Queue = {
  index: number;
  command: Command;
}[];

export function buildCommandQueue(input: string): Queue {
  let index = -1;
  const lines = input.split('\n');
  const queue: Queue = [];

  for (let line of lines) {
    const command = getCommand(line);

    index += commandLength[command[0]];

    if (command[0] === 'noop') {
      continue;
    }

    if (command[0] === 'addx') {
      queue.push({ index, command });
    }
  }

  return queue;
}
