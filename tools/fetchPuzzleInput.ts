import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import path from 'path';

(async function () {
  const args = (await Promise.resolve(
    yargs(hideBin(process.argv)).argv
  )) as unknown as Record<'session' | 'day' | 'out', string>;

  if (!args.session) {
    throw new Error('Missing `--session` argument');
  }

  if (!args.day) {
    throw new Error('Missing `--day` argument');
  }

  if (!args.out) {
    throw new Error('Missing `--out` argument');
  }

  console.log('args.session', args.session);

  const session = fs
    .readFileSync(path.join(__dirname, args.session))
    .toString();

  const headers = new Headers();

  headers.append('cookie', `session=${session}`);

  return fetch(`https://adventofcode.com/2022/day/${args.day}/input`, {
    headers,
  })
    .then((response) => response.text())
    .then((input) => {
      fs.writeFileSync(args.out, input);
    });
})();
