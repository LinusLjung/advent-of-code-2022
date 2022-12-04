import { SectionRange } from "./types";

export function getRanges(line: string): [SectionRange, SectionRange] {
  return line
    .split(',')
    .map((part) => part.split('-').map(Number) as SectionRange) as [
    SectionRange,
    SectionRange
  ];
}
