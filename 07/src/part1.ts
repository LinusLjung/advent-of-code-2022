import { findDirectoriesOfMaxSize } from './findFoldersOfMaxSize';
import { initializeFileSystem } from './initializeFileSystem';

export function part1(input: string) {
  const fileSystem = initializeFileSystem(input);

  return findDirectoriesOfMaxSize(fileSystem, 100000).reduce(
    (acc, curr) => acc + curr.size,
    0
  );
}
