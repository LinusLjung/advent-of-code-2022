import { Monkey } from './Monkey';

export function run(
  input: string,
  iterations: number,
  inspectReducesWorry = true
) {
  const monkeys = input
    .split('\n\n')
    .map((monkey) => monkey.split('\n').slice(1).join('\n'))
    .map((monkey) => new Monkey(monkey, inspectReducesWorry));

  monkeys.forEach((monkey) => (monkey.monkeys = monkeys));

  for (let i = 0; i < iterations; i++) {
    monkeys.forEach((monkey) => monkey.doRound());
  }

  return monkeys
    .map((monkey) => monkey.inspectCounter)
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, curr) => acc * curr);
}
