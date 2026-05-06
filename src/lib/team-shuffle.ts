export function getCombinations(arr: number[], k: number): number[][] {
  const result: number[][] = [];
  const combo: number[] = [];
  function backtrack(start: number): void {
    if (combo.length === k) {
      result.push([...combo]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      backtrack(i + 1);
      combo.pop();
    }
  }
  backtrack(0);
  return result;
}

export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export interface MatchSet {
  teamA: number[];
  teamB: number[];
  rest: number[];
}

export function getMatchSets(n: number, k: number): MatchSet[] {
  if (n < 2 * k) return [];
  const allPeople = Array.from({ length: n }, (_, i) => i + 1);
  const teamACombos = getCombinations(allPeople, k);
  const seen = new Set<string>();
  const matches: MatchSet[] = [];

  for (const teamA of teamACombos) {
    const remaining = allPeople.filter((p) => !teamA.includes(p));
    const teamBCombos = getCombinations(remaining, k);

    for (const teamB of teamBCombos) {
      const a = [...teamA].sort((x, y) => x - y);
      const b = [...teamB].sort((x, y) => x - y);
      const pair = a[0] < b[0] ? [a, b] : [b, a];
      const key = JSON.stringify(pair);
      if (!seen.has(key)) {
        seen.add(key);
        const rest = allPeople.filter((p) => !a.includes(p) && !b.includes(p));
        matches.push({ teamA: a, teamB: b, rest });
      }
    }
  }
  return matches;
}

function hasCommonRest(a: number[], b: number[]): boolean {
  const setA = new Set(a);
  for (const x of b) {
    if (setA.has(x)) return true;
  }
  return false;
}

export function shuffleAvoidConsecutiveRest(matches: MatchSet[]): MatchSet[] {
  if (matches.length <= 1) return [...matches];

  const pool = shuffle(matches);
  const result: MatchSet[] = [pool.pop()!];

  while (pool.length > 0) {
    const last = result[result.length - 1];
    const candidates: MatchSet[] = [];
    const others: MatchSet[] = [];

    for (const m of pool) {
      if (hasCommonRest(last.rest, m.rest)) {
        others.push(m);
      } else {
        candidates.push(m);
      }
    }

    let next: MatchSet;
    if (candidates.length > 0) {
      const idx = Math.floor(Math.random() * candidates.length);
      next = candidates[idx];
      const poolIdx = pool.findIndex((m) => m === next);
      pool.splice(poolIdx, 1);
    } else {
      const idx = Math.floor(Math.random() * others.length);
      next = others[idx];
      const poolIdx = pool.findIndex((m) => m === next);
      pool.splice(poolIdx, 1);
    }

    result.push(next);
  }

  return result;
}
