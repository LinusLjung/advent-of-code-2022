import { getPassedThreshold } from './getPassedThreshold';

function getCommand(line: string): string[] {
  return line.split(' ');
}

const commandLength = {
  noop: 1,
  addx: 2,
};

export function part1(input: string) {
  let x = 1;
  let cycle = 0;
  let sum = 0;

  function checkCycleThresholdAndAddToSum(
    cycle: number,
    previousCycle: number
  ) {
    const passedThreshold = getPassedThreshold(cycle, previousCycle);

    if (!passedThreshold) {
      return;
    }

    sum += passedThreshold * x;
  }

  input.split('\n').forEach((line) => {
    const [command, ...args] = getCommand(line);

    if (command === 'noop') {
      checkCycleThresholdAndAddToSum(cycle + commandLength.noop, cycle);
      cycle += commandLength.noop;
    }

    if (command === 'addx') {
      checkCycleThresholdAndAddToSum(cycle + commandLength.addx, cycle);
      cycle += commandLength.addx;

      x += Number(args[0]);
    }
  });

  return sum;
}
