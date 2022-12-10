import { buildCommandQueue } from './buildCommandQueue';

function drawScreen(screen: ('.' | '#')[][]) {
  return screen.reduce((acc, row) => acc + row.join('') + '\n', '');
}

const SCREEN_WIDTH = 40;
const SCREEN_HEIGHT = 6;

function paint(x: number, spritePosition: number): '.' | '#' {
  const diff = x - spritePosition;

  if (diff >= -1 && diff <= 1) {
    return '#';
  }

  return '.';
}

export function part2(input: string) {
  const screen = [...new Array(SCREEN_HEIGHT)].map(() =>
    [...new Array(SCREEN_WIDTH)].map<'.' | '#'>(() => '.')
  );

  let spritePosition = 1;
  let cycleCounter = 0;
  const queue = buildCommandQueue(input);

  for (let y = 0; y < screen.length; y++) {
    for (let x = 0; x < screen[y].length; x++, cycleCounter++) {
      screen[y][x] = paint(x, spritePosition);

      const { command } = queue.find((c) => c.index === cycleCounter) ?? {};

      if (!command) {
        continue;
      }

      if (command[0] === 'addx') {
        spritePosition += command[1];
      }
    }
  }

  return drawScreen(screen);
}
