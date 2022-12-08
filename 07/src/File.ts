import { Directory } from './Directory';
import { IFile } from './IFile';

export class File implements IFile {
  name: string;
  size: number;
  parent: Directory | null = null;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  toString() {
    return `${this.name} (file, size=${this.size})`;
  }
}
