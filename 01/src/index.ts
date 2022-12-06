import { getArgs } from '../../shared/getArgs';
import getInput from '../../shared/getInput';
import { part1 } from './part1';
import { part2 } from './part2';

const input = getInput();

const { part } = getArgs<{ part: number }>();

if (!part || part === 1) {
  console.log(part1(input));
}

if (!part || part === 2) {
  console.log(part2(input));
}
