import { Directory } from './Directory';
import { FileSystem } from './FileSystem';

export function findDirectoriesOfMaxSize(
  fileSystem: FileSystem,
  maxSize: number
): Directory[] {
  return fileSystem.flatContent
    .filter((c) => c instanceof Directory)
    .filter((d) => d.size <= maxSize) as Directory[];
}
