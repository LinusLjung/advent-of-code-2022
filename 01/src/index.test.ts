import fs from 'fs';
import path from 'path';
import { run } from './run';

const input = fs.readFileSync(path.join(__dirname, '../example-input.txt')).toString();

describe('example', () => {
  it('should output the solution', () => {
    expect(run(input)).toBe(24000);
  });
});
