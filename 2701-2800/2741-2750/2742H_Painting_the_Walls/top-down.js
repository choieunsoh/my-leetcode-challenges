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
  const memo = Array.from({ length: n }, () => new Array(n + 1).fill(0));
  return dp(0, n);

  function dp(i, remain) {
    if (remain <= 0) return 0;
    if (i === n) return Number.MAX_SAFE_INTEGER;
    if (memo[i][remain] !== 0) return memo[i][remain];

    const paint = cost[i] + dp(i + 1, remain - 1 - time[i]);
    const doNotPaint = dp(i + 1, remain);
    memo[i][remain] = Math.min(paint, doNotPaint);
    return memo[i][remain];
  }
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
