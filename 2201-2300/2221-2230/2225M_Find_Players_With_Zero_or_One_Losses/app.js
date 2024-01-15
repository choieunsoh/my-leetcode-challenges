// 2225. Find Players With Zero or One Losses
// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const result = [[], []];
  const losers = new Array(1e5 + 1).fill(-1);
  for (const [winner, loser] of matches) {
    if (losers[winner] === -1) {
      losers[winner] = 0;
    }
    if (losers[loser] === -1) {
      losers[loser] = 1;
    } else {
      losers[loser]++;
    }
  }

  for (let player = 0; player < losers.length; player++) {
    const lostCount = losers[player];
    if (lostCount === -1 || lostCount > 1) continue;
    result[lostCount].push(player);
  }

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
