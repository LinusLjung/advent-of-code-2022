import { isValidChar } from './isValidChar';

const charCodes = {
  a: 97,
  A: 65,
};

export function getCharPriority(char: string): number {
  if (!isValidChar(char)) {
    throw new Error(
      `Incorrect char argument ('${char}'). Should be a single alphabetic character`
    );
  }

  const charCode = char.charCodeAt(0);

  if (charCode >= charCodes.a) {
    return charCode - charCodes.a + 1;
  }

  return charCode - charCodes.A + 1 + getCharPriority('z');
}
