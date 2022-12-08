import { Directory } from './Directory';
import { File } from './File';
import { FileSystem } from './FileSystem';

function isDir(line: string) {
  return line.startsWith('dir');
}

function getDirName(line: string) {
  return line.split(' ').slice(1).join(' ');
}

function getFileData(line: string): [string, number] {
  const splitLine = line.split(' ');
  const size = Number(splitLine[0]);
  const name = splitLine.slice(1).join(' ');

  return [name, size];
}

function lineIsCommand(line: string) {
  return line.startsWith('$');
}

function commandIsCd(line: string) {
  return line.split(' ')[1] === 'cd';
}

function getDirectoryFromCommand(command: string) {
  return command.split(' ').slice(2).join(' ');
}

export function initializeFileSystem(input: string): FileSystem {
  const lines = input.split('\n');
  let filesOrFolders: (Directory | File)[] = [];
  let lineIndex = 2;

  const fileSystem = new FileSystem();

  while (lineIndex < lines.length) {
    for (
      ;
      lineIndex < lines.length && lines[lineIndex][0] !== '$';
      lineIndex++
    ) {
      const line = lines[lineIndex];

      if (isDir(line)) {
        filesOrFolders.push(new Directory(getDirName(line)));

        continue;
      }

      const [fileName, fileSize] = getFileData(line);

      filesOrFolders.push(new File(fileName, fileSize));
    }

    fileSystem.setContent(filesOrFolders);
    filesOrFolders = [];

    for (
      ;
      lineIndex < lines.length && lineIsCommand(lines[lineIndex]);
      lineIndex++
    ) {
      if (commandIsCd(lines[lineIndex])) {
        const directory = getDirectoryFromCommand(lines[lineIndex]);
        fileSystem.cd(directory);
      }
    }
  }

  return fileSystem;
}
