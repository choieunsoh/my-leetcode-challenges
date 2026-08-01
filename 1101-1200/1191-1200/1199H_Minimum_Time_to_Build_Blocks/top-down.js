// 1199. Minimum Time to Build Blocks
// https://leetcode.com/problems/minimum-time-to-build-blocks/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} blocks
 * @param {number} split
 * @return {number}
 */
var minBuildTime = function (blocks, split) {
  blocks = blocks.slice();
  blocks.sort((a, b) => b - a);

  const n = blocks.length;
  const dp = Array.from({ length: n }, () => Array(n + 1).fill(-1));
  return solve(0, 1);

  function solve(b, w) {
    if (b === n) {
      return 0;
    }
    if (w === 0) {
      return Number.MAX_SAFE_INTEGER;
    }
    if (w >= n - b) {
      return blocks[b];
    }
    if (dp[b][w] !== -1) {
      return dp[b][w];
    }

    const workHere = Math.max(blocks[b], solve(b + 1, w - 1));
    const splitHere = split + solve(b, Math.min(2 * w, n - b));

    dp[b][w] = Math.min(workHere, splitHere);
    return dp[b][w];
  }
};

var blocks = [1],
  split = 1;
var expected = 1;
var result = minBuildTime(blocks, split);
console.log(result, result === expected);

var blocks = [1, 2],
  split = 5;
var expected = 7;
var result = minBuildTime(blocks, split);
console.log(result, result === expected);

var blocks = [1, 2, 3],
  split = 1;
var expected = 4;
var result = minBuildTime(blocks, split);
console.log(result, result === expected);
