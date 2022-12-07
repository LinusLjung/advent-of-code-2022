import { File } from './File';

export class Directory {
  name: string;
  content: (Directory | File)[] = [];
  parent: Directory | null = null;

  constructor(path: string) {
    this.name = path;
  }

  setContent(content: (Directory | File)[]) {
    this.content = content;
  }

  setParent(parent: Directory) {
    this.parent = parent;
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

  toString() {
    return `${this.name} (dir)`;
  }
}
