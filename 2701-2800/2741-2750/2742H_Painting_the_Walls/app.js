// 2742. Painting the Walls
// https://leetcode.com/problems/painting-the-walls/
// T.C.: O(n ^ 2)
// S.C.: O(n ^ 2)
/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function (cost, time) {
  const n = cost.length;
  let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = n - 1; i >= 0; i--) {
    const nextDp = new Array(n + 1).fill(0);
    for (let remain = 1; remain <= n; remain++) {
      const newRemain = Math.max(0, remain - 1 - time[i]);
      const paint = cost[i] + dp[newRemain];
      const doNotPaint = dp[remain];
      nextDp[remain] = Math.min(paint, doNotPaint);
    }
    dp = nextDp;
  }
  return dp[n];
};

var cost = [1, 2, 3, 2],
  time = [1, 2, 3, 2];
var expected = 3;
var result = paintWalls(cost, time);
console.log(result, result === expected);

var cost = [2, 3, 4, 2],
  time = [1, 1, 1, 1];
var expected = 4;
var result = paintWalls(cost, time);
console.log(result, result === expected);
