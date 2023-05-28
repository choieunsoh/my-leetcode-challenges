// 1547. Minimum Cost to Cut a Stick
// https://leetcode.com/problems/minimum-cost-to-cut-a-stick/
/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
  const m = cuts.length;
  const dp = Array.from({ length: m + 2 }, () => new Array(m + 2).fill(0));
  const newCuts = [0, ...cuts, n].sort((a, b) => a - b);
  for (let diff = 2; diff < m + 2; diff++) {
    for (let left = 0; left < m + 2 - diff; left++) {
      const right = left + diff;
      const cutCost = newCuts[right] - newCuts[left];
      let result = Number.MAX_SAFE_INTEGER;
      for (let mid = left + 1; mid < right; mid++) {
        result = Math.min(result, dp[left][mid] + dp[mid][right] + cutCost);
      }
      dp[left][right] = result;
    }
  }
  return dp[0][m + 1];
};

var n = 7,
  cuts = [1, 3, 4, 5];
var expected = 16;
var result = minCost(n, cuts);
console.log(result, result === expected);

var n = 9,
  cuts = [5, 6, 1, 4, 2];
var expected = 22;
var result = minCost(n, cuts);
console.log(result, result === expected);
