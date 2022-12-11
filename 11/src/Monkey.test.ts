import { Monkey } from './Monkey';

describe('Monkey', () => {
  it.each([
    [
      `  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3`,
      [79, 98],
      ['*', 19],
      23,
      [2, 3],
    ],
    [
      `  Starting items: 54, 65, 75, 74
  Operation: new = old + 6
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0`,
      [54, 65, 75, 74],
      ['+', 6],
      19,
      [2, 0],
    ],
    [
      `  Starting items: 79, 60, 97
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3`,
      [79, 60, 97],
      ['*', 'old'],
      13,
      [1, 3],
    ],
  ])(
    'should initialize with the given input',
    (input, items, operation, divisor, targets) => {
      const monkey = new Monkey(input);

      expect(monkey.items).toStrictEqual(items);
      expect(monkey.operation).toStrictEqual(operation);
      expect(monkey.divisor).toBe(divisor);
      expect(monkey.targets).toStrictEqual(targets);
    }
  );

  describe('.inspect()', () => {
    it('should adjust the worry level of the item', () => {
      const monkey = new Monkey(
        `  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3`
      );

      expect(monkey.inspect(79)).toBe(500);

      monkey.operation = ['+', 6];
      expect(monkey.inspect(54)).toBe(20);
    });
  });

  describe('.getTarget()', () => {
    it('should pick a target based on worry level', () => {
      const monkey = new Monkey(
        `  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3`
      );

      expect(monkey.getTarget(79)).toBe(3);
      expect(monkey.getTarget(23)).toBe(2);
      expect(monkey.getTarget(23 * 3)).toBe(2);
    });
  });
});
