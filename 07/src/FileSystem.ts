import { Directory } from './Directory';
import { File } from './File';

export class FileSystem {
  root = new Directory('/');
  cwd = this.root;

  flatContent: (Directory | File)[] = [this.root];

  setContent(content: (Directory | File)[]) {
    this.flatContent.push(...content);

    this.cwd.setContent(
      content.map((fileOrDir) => {
        fileOrDir.parent = this.cwd;

        if (fileOrDir instanceof File) {
          return fileOrDir;
        }

        return fileOrDir;
      })
    );
  }

  cd(dir: string) {
    if (dir === '/') {
      this.cwd = this.root;
    }

    const newDir = this.cwd.getDir(dir);

    if (!newDir) {
      console.error(`Failed to change to directory ${dir}`);

      return;
    }

    this.cwd = newDir;
  }
}
