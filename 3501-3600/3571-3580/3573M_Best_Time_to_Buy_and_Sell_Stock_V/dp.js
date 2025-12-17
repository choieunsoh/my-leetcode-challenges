// 3573. Best Time to Buy and Sell Stock V
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-v/description/
// T.C.: O(n*k)
// S.C.: O(n*k)
/**
 * @param {number[]} prices
 * @param {number} k
 * @return {number}
 */
var maximumProfit = function (prices, k) {
  const STATES = {
    NoStock: 0,
    HoldingStock: 1,
    ShortStock: 2,
  };
  const n = prices.length;
  const dp = Array.from({ length: n }, () => Array.from({ length: k + 1 }, () => new Array(3).fill(0)));

  for (let transactionsLeft = 1; transactionsLeft <= k; transactionsLeft++) {
    dp[0][transactionsLeft][STATES.HoldingStock] = -prices[0];
    dp[0][transactionsLeft][STATES.ShortStock] = prices[0];
  }

  for (let day = 1; day < n; day++) {
    for (let transactionsLeft = 1; transactionsLeft <= k; transactionsLeft++) {
      const sell = dp[day - 1][transactionsLeft][STATES.HoldingStock] + prices[day];
      const shortSell = dp[day - 1][transactionsLeft][STATES.ShortStock] - prices[day];
      dp[day][transactionsLeft][STATES.NoStock] = Math.max(
        dp[day - 1][transactionsLeft][STATES.NoStock],
        sell,
        shortSell
      );

      const buy = dp[day - 1][transactionsLeft - 1][STATES.NoStock] - prices[day];
      dp[day][transactionsLeft][STATES.HoldingStock] = Math.max(
        dp[day - 1][transactionsLeft][STATES.HoldingStock],
        buy
      );

      const buyBack = dp[day - 1][transactionsLeft - 1][STATES.NoStock] + prices[day];
      dp[day][transactionsLeft][STATES.ShortStock] = Math.max(
        dp[day - 1][transactionsLeft][STATES.ShortStock],
        buyBack
      );
    }
  }

  return dp[n - 1][k][STATES.NoStock];
};

var prices = [1, 7, 9, 8, 2],
  k = 2;
var expected = 14;
var result = maximumProfit(prices, k);
console.log(result, result === expected);

var prices = [12, 16, 19, 19, 8, 1, 19, 13, 9],
  k = 3;
var expected = 36;
var result = maximumProfit(prices, k);
console.log(result, result === expected);
