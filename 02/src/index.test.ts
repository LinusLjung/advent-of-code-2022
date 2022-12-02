import fs from 'fs';
import path from 'path';
import { part1 } from './part1';

const input = fs
  .readFileSync(path.join(__dirname, '../example-input.txt'))
  .toString();

describe('part1', () => {
  it('should output the solution', () => {
    expect(part1(input)).toBe(15);
  });
});
