import { Monkey } from './Monkey';

export function part1(input: string) {
  const monkeys = input
    .split('\n\n')
    .map((monkey) => monkey.split('\n').slice(1).join('\n'))
    .map((monkey) => new Monkey(monkey));

  monkeys.forEach((monkey, i, allMonkeys) => (monkey.monkeys = allMonkeys));

  for (let i = 0; i < 20; i++) {
    monkeys.forEach((monkey) => monkey.doRound());
  }

  return monkeys
    .map((monkey) => monkey.inspectCounter)
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, curr) => acc * curr);
}
