export function findDuplicates([a, b]: [string, string]): string[] {
  const testedChars: string[] = [];

  return a.split('').filter((char) => {
    if (testedChars.includes(char)) {
      return false;
    }

    testedChars.push(char);

    return b.includes(char);
  });
}
