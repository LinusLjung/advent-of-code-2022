import { Directory } from './Directory';

export interface IFile {
  size: number;
  name: string;
  parent: Directory | null;
}
