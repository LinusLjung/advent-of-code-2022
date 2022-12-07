import { initializeFileSystem } from './initializeFileSystem';

export function part1(input: string) {
  const fileSystem = initializeFileSystem(input);

  fileSystem.cd('hvfvt');
  console.log(fileSystem);
}
