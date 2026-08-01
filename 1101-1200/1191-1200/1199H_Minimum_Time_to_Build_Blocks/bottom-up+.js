// 1199. Minimum Time to Build Blocks
// https://leetcode.com/problems/minimum-time-to-build-blocks/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} blocks
 * @param {number} split
 * @return {number}
 */
var minBuildTime = function (blocks, split) {
  blocks = blocks.slice();
  const N = blocks.length;
  blocks.sort((a, b) => b - a);

  const dp = Array.from({ length: N + 1 }, () => 0);
  dp[0] = Number.MAX_SAFE_INTEGER;

  for (let b = N - 1; b >= 0; b--) {
    for (let w = N; w > 0; w--) {
      if (w >= N - b) {
        dp[w] = blocks[b];
        continue;
      }

      const workHere = Math.max(blocks[b], dp[w - 1]);
      const splitHere = split + dp[Math.min(2 * w, N - b)];
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
