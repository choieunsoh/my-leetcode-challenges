// 3562. Maximum Profit from Trading Stocks with Discounts
// https://leetcode.com/problems/maximum-profit-from-trading-stocks-with-discounts/description/
// T.C.: O(n*m^2)
// S.C.: O(n*m)
/**
 * @param {number} n
 * @param {number[]} present
 * @param {number[]} future
 * @param {number[][]} hierarchy
 * @param {number} budget
 * @return {number}
 */
var maxProfit = function (n, present, future, hierarchy, budget) {
  const g = Array.from({ length: n }, () => []);
  for (const [u, v] of hierarchy) {
    g[u - 1].push(v - 1);
  }

  const [dp0] = dfs(0);
  return dp0[budget];

  function dfs(u) {
    const cost = present[u];
    const dCost = cost >> 1;

    // dp[u][state][budget]
    // state: 0 = not purchasing parent node, 1 = purchasing parent node
    const dp0 = new Array(budget + 1).fill(0);
    const dp1 = new Array(budget + 1).fill(0);

    // subProfit[state][budget]
    // state = 0: discount not available, state = 1: discount available
    const subProfit0 = Array(budget + 1).fill(0);
    const subProfit1 = Array(budget + 1).fill(0);

    let uSize = cost;
    for (const v of g[u]) {
      const [subDp0, subDp1, vSize] = dfs(v);
      uSize += vSize;

      for (let i = budget; i >= 0; i--) {
        for (let sub = 0; sub <= Math.min(vSize, i); sub++) {
          subProfit0[i] = Math.max(subProfit0[i], subProfit0[i - sub] + subDp0[sub]);
          subProfit1[i] = Math.max(subProfit1[i], subProfit1[i - sub] + subDp1[sub]);
        }
      }
    }

    for (let i = 0; i <= budget; i++) {
      dp0[i] = dp1[i] = subProfit0[i];

      if (i >= dCost) {
        dp1[i] = Math.max(subProfit0[i], subProfit1[i - dCost] + future[u] - dCost);
      }

      if (i >= cost) {
        dp0[i] = Math.max(subProfit0[i], subProfit1[i - cost] + future[u] - cost);
      }
    }

    return [dp0, dp1, uSize];
  }
};

var n = 2,
  present = [1, 2],
  future = [4, 3],
  hierarchy = [[1, 2]],
  budget = 3;
var expected = 5;
var result = maxProfit(n, present, future, hierarchy, budget);
console.log(result, result === expected);

var n = 2,
  present = [3, 4],
  future = [5, 8],
  hierarchy = [[1, 2]],
  budget = 4;
var expected = 4;
var result = maxProfit(n, present, future, hierarchy, budget);
console.log(result, result === expected);

var n = 3,
  present = [4, 6, 8],
  future = [7, 9, 11],
  hierarchy = [
    [1, 2],
    [1, 3],
  ],
  budget = 10;
var expected = 10;
var result = maxProfit(n, present, future, hierarchy, budget);
console.log(result, result === expected);

var n = 3,
  present = [5, 2, 3],
  future = [8, 5, 6],
  hierarchy = [
    [1, 2],
    [2, 3],
  ],
  budget = 7;
var expected = 12;
var result = maxProfit(n, present, future, hierarchy, budget);
console.log(result, result === expected);
