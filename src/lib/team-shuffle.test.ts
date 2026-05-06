import { describe, it, expect } from "vitest";
import {
  getCombinations,
  shuffle,
  getMatchSets,
  shuffleAvoidConsecutiveRest,
} from "./team-shuffle.js";

describe("getCombinations", () => {
  it("returns combinations of size k", () => {
    expect(getCombinations([1, 2, 3], 2)).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
    ]);
    expect(getCombinations([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    expect(getCombinations([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
    expect(getCombinations([1, 2, 3], 0)).toEqual([[]]);
    expect(getCombinations([], 1)).toEqual([]);
  });
});

describe("shuffle", () => {
  it("returns a shuffled array with the same elements", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle(original);
    expect(shuffled.sort((a, b) => a - b)).toEqual(original);
  });
});

describe("getMatchSets", () => {
  it("returns valid match sets", () => {
    const matches5_2 = getMatchSets(5, 2);
    expect(matches5_2.length).toBeGreaterThan(0);
    matches5_2.forEach((m) => {
      expect(Array.isArray(m.teamA)).toBe(true);
      expect(Array.isArray(m.teamB)).toBe(true);
      expect(Array.isArray(m.rest)).toBe(true);
      expect(m.teamA.length).toBe(2);
      expect(m.teamB.length).toBe(2);
    });

    const keys5_2 = new Set(
      matches5_2.map((m) => JSON.stringify([m.teamA, m.teamB, m.rest])),
    );
    expect(keys5_2.size).toBe(matches5_2.length);
    expect(getMatchSets(3, 2)).toEqual([]);
  });
});

describe("shuffleAvoidConsecutiveRest", () => {
  function makeMatch(rest: number[]) {
    return { teamA: [1], teamB: [2], rest };
  }

  it("avoids consecutive common rests when possible", () => {
    const testMatches = [
      makeMatch([1]),
      makeMatch([2]),
      makeMatch([3]),
      makeMatch([4]),
    ];

    const shuffledMatches = shuffleAvoidConsecutiveRest(testMatches);
    expect(shuffledMatches.length).toBe(testMatches.length);

    let consecutiveCommonCount = 0;
    for (let i = 0; i < shuffledMatches.length - 1; i++) {
      const setA = new Set(shuffledMatches[i].rest);
      for (const x of shuffledMatches[i + 1].rest) {
        if (setA.has(x)) {
          consecutiveCommonCount++;
          break;
        }
      }
    }
    expect(consecutiveCommonCount).toBe(0);
  });

  it("handles impossible cases gracefully", () => {
    const sameRestMatches = [makeMatch([5]), makeMatch([5]), makeMatch([5])];
    const sameRestShuffled = shuffleAvoidConsecutiveRest(sameRestMatches);
    expect(sameRestShuffled.length).toBe(3);
  });

  it("works with real match sets", () => {
    const realMatches = getMatchSets(5, 2);
    const realShuffled = shuffleAvoidConsecutiveRest(realMatches);
    expect(realShuffled.length).toBe(realMatches.length);
    const realKeys = new Set(
      realShuffled.map((m) => JSON.stringify([m.teamA, m.teamB, m.rest])),
    );
    expect(realKeys.size).toBe(realMatches.length);
  });
});
