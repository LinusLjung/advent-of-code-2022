type OperationSign = '+' | '*';

export class Monkey {
  items: number[];
  operation: [OperationSign, number | 'old'];
  divisor: number;
  targets: [number, number];
  inspectCounter = 0;
  monkeys: Monkey[] = [];
  inspectReducesWorry: boolean;
  constructor(input: string, inspectReducesWorry = true) {
    const [items, operation, divisor, target1, target2] = input
      .split('\n')
      .map((line) => line.trim());

    this.items = /:\s(.*)/g.exec(items)?.[1].split(', ').map(Number) ?? [];

    const [, sign, number] = /old\s(.)\s((\d+)|old)/g.exec(operation) ?? [];
    this.operation = [
      sign as OperationSign,
      number === 'old' ? number : Number(number),
    ];

    this.divisor = Number(/(\d+)$/g.exec(divisor)?.[1]);

    const targetRegex = /(\d+)$/;

    this.targets = [
      Number(targetRegex.exec(target1)?.[1]),
      Number(targetRegex.exec(target2)?.[1]),
    ];

    this.inspectReducesWorry = inspectReducesWorry;
  }

  doRound() {
    while (this.items.length) {
      const item = this.inspect(this.items.shift()!);
      const target = this.getTarget(item);
      this.throw(target, item);
    }
  }

  inspect(item: number) {
    let [operationSign, operationNumber] = this.operation;

    operationNumber = operationNumber === 'old' ? item : operationNumber;

    this.inspectCounter++;

    switch (operationSign) {
      case '*':
        item = item * operationNumber;
        break;
      case '+':
        item = item + operationNumber;
        break;
    }

    if (this.inspectReducesWorry) {
      return Math.floor(item / 3);
    }

    return (
      item % this.monkeys.reduce<number>((acc, curr) => acc * curr.divisor, 1)
    );
  }

  getTarget(item: number) {
    return item % this.divisor === 0 ? this.targets[0] : this.targets[1];
  }

  throw(target: number, item: number) {
    this.monkeys[target].items.push(item);
  }
}
