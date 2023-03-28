// 983. Minimum Cost For Tickets
// https://leetcode.com/problems/minimum-cost-for-tickets/
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const seen = new Set(days);
  const dp = Array(366).fill(-1);
  return dfs(1);

  function dfs(day) {
    if (day > 365) return 0;
    if (dp[day] !== -1) return dp[day];
    if (!seen.has(day)) return dfs(day + 1);
    const dayPassCost = dfs(day + 1) + costs[0];
    const weekPassCost = dfs(day + 7) + costs[1];
    const monthPassCost = dfs(day + 30) + costs[2];
    dp[day] = Math.min(dayPassCost, weekPassCost, monthPassCost);
    return dp[day];
  }
};

var days = [1, 4, 6, 7, 8, 20],
  costs = [2, 7, 15];
var expected = 11;
var result = mincostTickets(days, costs);
console.log(result, result === expected);

var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31],
  costs = [2, 7, 15];
var expected = 17;
var result = mincostTickets(days, costs);
console.log(result, result === expected);
