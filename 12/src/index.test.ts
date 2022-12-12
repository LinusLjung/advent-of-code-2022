import path from 'path';
import getInput from '../../shared/getInput';
import { part1 } from './part1';

const exampleInput = getInput(path.join(__dirname, '../example-input.txt'));
const input = getInput(path.join(__dirname, '../input.txt'));

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(exampleInput)).toEqual(31);
  });
});

describe.skip('part2()', () => {
  it('should output the solution', () => {});
});
