import { commandLength } from './consts';
import { getCommand } from './getCommand';
import { getPassedThreshold } from './getPassedThreshold';

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
    const [command, arg] = getCommand(line);

    if (command === 'noop') {
      checkCycleThresholdAndAddToSum(cycle + commandLength.noop, cycle);
      cycle += commandLength.noop;
    }

    if (command === 'addx') {
      checkCycleThresholdAndAddToSum(cycle + commandLength.addx, cycle);
      cycle += commandLength.addx;

      x += arg;
    }
  });

  return sum;
}
