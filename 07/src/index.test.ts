import path from 'path';
import getInput from '../../shared/getInput';
import { part1 } from './part1';
import { part2 } from './part2';

const input = getInput(path.join(__dirname, '../example-input.txt'));

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(input)).toBe(95437);
  });
});

describe('part2()', () => {
  it('should output the solution', () => {
    expect(part2(input)).toBe(24933642);
  });
});
