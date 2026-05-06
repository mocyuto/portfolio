import assert from "node:assert";
import {
  getCombinations,
  shuffle,
  getMatchSets,
  shuffleAvoidConsecutiveRest,
} from "./team-shuffle.js";

// --- getCombinations ---
assert.deepStrictEqual(getCombinations([1, 2, 3], 2), [
  [1, 2],
  [1, 3],
  [2, 3],
]);
assert.deepStrictEqual(getCombinations([1, 2, 3], 1), [[1], [2], [3]]);
assert.deepStrictEqual(getCombinations([1, 2, 3], 3), [[1, 2, 3]]);
assert.deepStrictEqual(getCombinations([1, 2, 3], 0), [[]]);
assert.deepStrictEqual(getCombinations([], 1), []);

// --- shuffle ---
const original = [1, 2, 3, 4, 5];
const shuffled = shuffle(original);
assert.deepStrictEqual(
  shuffled.sort((a, b) => a - b),
  original,
);

// --- getMatchSets ---
const matches5_2 = getMatchSets(5, 2);
assert.strictEqual(matches5_2.length > 0, true);
matches5_2.forEach((m) => {
  assert.ok(Array.isArray(m.teamA));
  assert.ok(Array.isArray(m.teamB));
  assert.ok(Array.isArray(m.rest));
  assert.strictEqual(m.teamA.length, 2);
  assert.strictEqual(m.teamB.length, 2);
});

const keys5_2 = new Set(
  matches5_2.map((m) => JSON.stringify([m.teamA, m.teamB, m.rest])),
);
assert.strictEqual(keys5_2.size, matches5_2.length);
assert.deepStrictEqual(getMatchSets(3, 2), []);

// --- shuffleAvoidConsecutiveRest ---
function makeMatch(rest) {
  return { teamA: [1], teamB: [2], rest };
}

// 共通要素が一切ないケース
const testMatches = [
  makeMatch([1]),
  makeMatch([2]),
  makeMatch([3]),
  makeMatch([4]),
];

const shuffledMatches = shuffleAvoidConsecutiveRest(testMatches);
assert.strictEqual(shuffledMatches.length, testMatches.length);

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
assert.strictEqual(
  consecutiveCommonCount,
  0,
  `Expected 0 consecutive common rests but got ${consecutiveCommonCount}`,
);

// 不可能なケース: 全部同じ余り
const sameRestMatches = [makeMatch([5]), makeMatch([5]), makeMatch([5])];
const sameRestShuffled = shuffleAvoidConsecutiveRest(sameRestMatches);
assert.strictEqual(sameRestShuffled.length, 3);

// 実際のマッチセットでテスト
const realMatches = getMatchSets(5, 2);
const realShuffled = shuffleAvoidConsecutiveRest(realMatches);
assert.strictEqual(realShuffled.length, realMatches.length);
const realKeys = new Set(
  realShuffled.map((m) => JSON.stringify([m.teamA, m.teamB, m.rest])),
);
assert.strictEqual(realKeys.size, realMatches.length);

console.log("All tests passed!");
