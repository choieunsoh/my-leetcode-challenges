// 983. Minimum Cost For Tickets
// https://leetcode.com/problems/minimum-cost-for-tickets/
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const n = days[days.length - 1];
  const dp = Array(n + 1).fill(0);
  let i = 0;
  for (let day = 1; day <= n; day++) {
    if (day === days[i]) {
      const costDayPass = dp[day - 1] + costs[0];
      const costWeekPass = dp[Math.max(0, day - 7)] + costs[1];
      const costMonthPass = dp[Math.max(0, day - 30)] + costs[2];
      dp[day] = Math.min(costDayPass, costWeekPass, costMonthPass);
      i++;
    } else {
      dp[day] = dp[day - 1];
    }
  }
  return dp[n];
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
