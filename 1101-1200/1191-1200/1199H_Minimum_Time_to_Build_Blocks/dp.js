// 1199. Minimum Time to Build Blocks
// https://leetcode.com/problems/minimum-time-to-build-blocks/
/**
 * @param {number[]} blocks
 * @param {number} split
 * @return {number}
 */
var minBuildTime = function (blocks, split) {
  const n = blocks.length;
  blocks.sort((a, b) => b - a);
  const dp = new Array(n + 1).fill(0);
  dp[0] = Number.MAX_SAFE_INTEGER;
  for (let b = n - 1; b >= 0; b--) {
    for (let w = n; w > 0; w--) {
      if (w >= n - b) {
        dp[w] = blocks[b];
        continue;
      }

      const workHere = Math.max(blocks[b], dp[w - 1]);
      const splitHere = split + dp[Math.min(2 * w, n - b)];
      dp[w] = Math.min(workHere, splitHere);
    }
  }
  return dp[1];
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
