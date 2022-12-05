import { doStep } from './doStep';
import { getStacksFromInput } from './getStacksFromInput';
import { getSteps } from './getSteps';
import { getTopItems } from './getTopItems';
import { splitInput } from './splitInput';

export function part1(input: string) {
  const [stackInput, stepsInput] = splitInput(input);

  return getTopItems(
    getSteps(stepsInput).reduce((stacks, step) => {
      return doStep(stacks, step);
    }, getStacksFromInput(stackInput))
  ).join('');
}
