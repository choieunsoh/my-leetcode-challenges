// 879. Profitable Schemes
// https://leetcode.com/problems/profitable-schemes/
/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function (n, minProfit, group, profit) {
  const MOD = 1e9 + 7;
  const memo = Array.from({ length: 101 }, () => Array.from({ length: 101 }, () => Array(101).fill(-1)));

  return dfs(0, 0, 0, n, minProfit, group, profit);

  function dfs(pos, count, profit, n, minProfit, group, profits) {
    if (pos == group.length) {
      // If profit exceeds the minimum required; it's a profitable scheme.
      return profit >= minProfit ? 1 : 0;
    }

    if (memo[pos][count][profit] !== -1) {
      // Repeated subproblem, return the stored answer.
      return memo[pos][count][profit];
    }

    // Ways to get a profitable scheme without this crime.
    let totalWays = dfs(pos + 1, count, profit, n, minProfit, group, profits);
    if (count + group[pos] <= n) {
      // Adding ways to get profitable schemes, including this crime.
      const nextCount = count + group[pos];
      const nextMinProfit = Math.min(minProfit, profit + profits[pos]);
      totalWays += dfs(pos + 1, nextCount, nextMinProfit, n, minProfit, group, profits);
    }

    memo[pos][count][profit] = totalWays % MOD;
    return memo[pos][count][profit];
  }
};

var n = 5,
  minProfit = 3,
  group = [2, 2],
  profit = [2, 3];
var expected = 2;
var result = profitableSchemes(n, minProfit, group, profit);
console.log(result, result === expected);

var n = 10,
  minProfit = 5,
  group = [2, 3, 5],
  profit = [6, 7, 8];
var expected = 7;
var result = profitableSchemes(n, minProfit, group, profit);
console.log(result, result === expected);
