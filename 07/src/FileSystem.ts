import { Directory } from './Directory';
import { File } from './File';

export class FileSystem {
  cwd = new Directory('/');

  setContent(content: (Directory | File)[]) {
    this.cwd.setContent(
      content.map((fileOrDir) => {
        if (fileOrDir instanceof File) {
          return fileOrDir;
        }

        fileOrDir.setParent(this.cwd);

        return fileOrDir;
      })
    );
  }

  cd(dir: string) {
    const newDir = this.cwd.getDir(dir);

    if (!newDir) {
      console.error(`Failed to change to directory ${dir}`);

      return;
    }

    this.cwd = newDir;
  }
}
