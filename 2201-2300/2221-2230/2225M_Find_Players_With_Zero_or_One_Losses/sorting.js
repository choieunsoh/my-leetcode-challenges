// 2225. Find Players With Zero or One Losses
// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const result = [[], []];
  const players = new Set(matches.flat());
  const losers = new Map();
  for (const [, loser] of matches) {
    const count = losers.get(loser) ?? 0;
    losers.set(loser, count + 1);
  }

  for (const player of players) {
    if (!losers.has(player)) {
      result[0].push(player);
      continue;
    }
    const lostCount = losers.get(player) ?? 0;
    if (lostCount === 1) {
      result[1].push(player);
    }
  }
  result[0].sort((a, b) => a - b);
  result[1].sort((a, b) => a - b);
  return result;
};

var matches = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
];
var expected = [
  [1, 2, 10],
  [4, 5, 7, 8],
];
var result = findWinners(matches);
console.log(result, result.join() === expected.join());

var matches = [
  [2, 3],
  [1, 3],
  [5, 4],
  [6, 4],
];
var expected = [[1, 2, 5, 6], []];
var result = findWinners(matches);
console.log(result, result.join() === expected.join());
