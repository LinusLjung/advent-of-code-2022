export function hasDuplicates(string: string): boolean {
  return string.split('').some((char, i, stringArray) => {
    return stringArray.filter((c) => c === char).length > 1;
  });
}
