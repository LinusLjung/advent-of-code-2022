import eol from 'eol';
import fs from 'fs';
import { getArgs } from './getArgs';

function getInput() {
  const {
    _: [inputPath],
  } = getArgs<{
    _: Array<string | number>;
  }>();

  if (!inputPath) {
    throw new Error('Missing `input` argument');
  }

  return eol.lf(fs.readFileSync(inputPath, 'utf8'));
}

export default getInput;
