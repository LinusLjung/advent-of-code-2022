import { File } from './File';
import { IFile } from './IFile';

export class Directory implements IFile {
  name: string;
  content: (Directory | File)[] = [];
  parent: Directory | null = null;

  constructor(path: string) {
    this.name = path;
  }

  setContent(content: (Directory | File)[]) {
    this.content = content;
  }

  getDir(dir: string): Directory | null {
    if (dir === '..') {
      return this.parent;
    }

    return this.content
      .filter((d) => d instanceof Directory)
      .find((d) => {
        return d.name === dir;
      }) as Directory | null;
  }

  get size(): number {
    return this.content.reduce((acc, curr) => acc + curr.size, 0);
  }

  toString() {
    return `${this.name} (dir)`;
  }
}
