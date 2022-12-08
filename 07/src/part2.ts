import { findDirectoriesOfMinSize } from './findDirectoriesOfMinSize';
import { initializeFileSystem } from './initializeFileSystem';

const DISK_SIZE = 70000000;
const NEEDED_SPACE = 30000000;

export function part2(input: string) {
  const fileSystem = initializeFileSystem(input);
  const freeSpace = DISK_SIZE - fileSystem.root.size;
  const neededSpace = NEEDED_SPACE - freeSpace;
  const directories = findDirectoriesOfMinSize(fileSystem, neededSpace);

  return directories
    .sort((a, b) => a.size - b.size)
    .find((directory) => directory.size >= neededSpace)?.size;
}
