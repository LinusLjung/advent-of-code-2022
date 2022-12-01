import fs from 'fs';
import path from 'path';
import { part1 } from './part1';
import { part2 } from './part2';

const input = fs
  .readFileSync(path.join(__dirname, '../example-input.txt'))
  .toString();

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(input)).toBe(24000);
  });
});

describe('part2()', () => {
  it('should output the solution', () => {
    expect(part2(input)).toBe(45000);
  });
});
