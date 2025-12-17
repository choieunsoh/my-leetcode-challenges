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
  const memo = Array.from({ length: n }, () => Array.from({ length: k + 1 }, () => new Array(3).fill(-1)));
  return dfs(n - 1, k, STATES.NoStock);

  function dfs(currentDay, transactionsLeft, state) {
    if (transactionsLeft === 0) {
      return 0;
    }

    if (currentDay === 0) {
      if (state === STATES.NoStock) return 0;
      if (state === STATES.HoldingStock) return -prices[0];
      return prices[0];
    }

    if (memo[currentDay][transactionsLeft][state] !== -1) {
      return memo[currentDay][transactionsLeft][state];
    }

    let best = 0;
    switch (state) {
      case STATES.NoStock: {
        const prevState = dfs(currentDay - 1, transactionsLeft, 0);
        const sell = dfs(currentDay - 1, transactionsLeft, 1) + prices[currentDay];
        const shortSell = dfs(currentDay - 1, transactionsLeft, 2) - prices[currentDay];
        best = Math.max(prevState, sell, shortSell);
        break;
      }
      case STATES.HoldingStock: {
        const prevState = dfs(currentDay - 1, transactionsLeft, 1);
        const buy = dfs(currentDay - 1, transactionsLeft - 1, 0) - prices[currentDay];
        best = Math.max(prevState, buy);
        break;
      }
      case STATES.ShortStock: {
        const prevState = dfs(currentDay - 1, transactionsLeft, 2);
        const buyBack = dfs(currentDay - 1, transactionsLeft - 1, 0) + prices[currentDay];
        best = Math.max(prevState, buyBack);
        break;
      }
      default:
        break;
    }
    memo[currentDay][transactionsLeft][state] = best;
    return best;
  }
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
