import fs from 'fs-extra';
import { exec } from 'child_process';
import path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const TEMPLATE_FOLDER = path.resolve(__dirname, './template');

function getDay(day: string) {
  if (day.length === 1) {
    return `0${day}`;
  }

  return day;
}

(async function () {
  const argv = await Promise.resolve(yargs(hideBin(process.argv)).argv);

  const {
    _: [day],
  } = argv;

  if (!day) {
    throw new Error('Missing day number as first argument');
  }

  const folderPath = path.resolve(__dirname, '../', getDay(day.toString()));

  if (fs.existsSync(folderPath)) {
    throw new Error(`Folder with path ${folderPath} already exists`);
  }

  fs.copy(TEMPLATE_FOLDER, folderPath, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Day ${day} generated`);
  });

  exec(
    `ts-node ${path.join(
      __dirname,
      './fetchPuzzleInput.ts'
    )} --session ../session.txt --day ${day} --out ${path.join(
      folderPath,
      'input.txt'
    )}`,
    console.log
  );
})();
