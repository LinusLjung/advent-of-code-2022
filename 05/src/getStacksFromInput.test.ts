import { getStacksFromInput } from './getStacksFromInput';

describe('getStacksFromInput()', () => {
  it('should parse the input and return the stacks', () => {
    const input = `    [D]        
[N] [C]        
[Z] [M]     [P]
 1   2   3   4`;

    expect(getStacksFromInput(input)).toStrictEqual({
      0: ['Z', 'N'],
      1: ['M', 'C', 'D'],
      3: ['P'],
    });
  });
});
