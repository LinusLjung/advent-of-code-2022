import path from 'path';
import getInput from '../../shared/getInput';
import { part1 } from './part1';
import { part2 } from './part2';

const exampleInput = getInput(path.join(__dirname, '../example-input.txt'));
const input = getInput(path.join(__dirname, '../input.txt'));

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(exampleInput)).toBe(13);
    expect(part1(input)).toBe(6086);
  });
});

describe('part2()', () => {
  it('should output the solution', () => {
    expect(part2(exampleInput)).toBe(140);
    expect(part2(input)).toBe(27930);
  });
});
