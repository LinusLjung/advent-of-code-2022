const BASE = 20;
const SPAN = 40;

function normalizeCycle(cycle: number) {
  return (cycle + BASE) % SPAN;
}

export function getPassedThreshold(
  cycle: number,
  previousCycle: number
): number | null {
  if (previousCycle < BASE && cycle >= BASE) {
    return BASE;
  }

  if (normalizeCycle(previousCycle) > normalizeCycle(cycle)) {
    const multiplier = Math.floor((cycle + BASE) / SPAN - 1);

    return BASE + SPAN * multiplier;
  }

  return null;
}
