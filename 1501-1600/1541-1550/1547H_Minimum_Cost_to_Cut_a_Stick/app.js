// 1547. Minimum Cost to Cut a Stick
// https://leetcode.com/problems/minimum-cost-to-cut-a-stick/
/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
  const m = cuts.length;
  const dp = Array.from({ length: m + 2 }, () => new Array(m + 2).fill(-1));
  const newCuts = [0, ...cuts, n].sort((a, b) => a - b);
  return dfs(0, m + 1);

  function dfs(left, right) {
    if (right - left === 1) {
      return 0;
    }
    if (dp[left][right] !== -1) {
      return dp[left][right];
    }

    let result = Number.MAX_SAFE_INTEGER;
    const cutCost = newCuts[right] - newCuts[left];
    for (let mid = left + 1; mid < right; mid++) {
      const totalCost = dfs(left, mid) + dfs(mid, right) + cutCost;
      result = Math.min(result, totalCost);
    }
    dp[left][right] = result;
    return dp[left][right];
  }
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
