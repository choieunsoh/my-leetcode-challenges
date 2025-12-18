// 3652. Best Time to Buy and Sell Stock using Strategy
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-using-strategy/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
var maxProfit = function (prices, strategy, k) {
  const n = prices.length;
  const profitSum = new Array(n + 1).fill(0);
  const priceSum = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    profitSum[i] = profitSum[i - 1] + strategy[i - 1] * prices[i - 1];
    priceSum[i] = priceSum[i - 1] + prices[i - 1];
  }

  let maxProfit = profitSum[n];
  for (let i = k - 1; i < n; i++) {
    const leftProfit = profitSum[i - k + 1];
    const rightProfit = profitSum[n] - profitSum[i + 1];
    const changeProfit = priceSum[i + 1] - priceSum[i - (k >> 1) + 1];
    maxProfit = Math.max(maxProfit, leftProfit + changeProfit + rightProfit);
  }
  return maxProfit;
};

var prices = [4, 2, 8],
  strategy = [-1, 0, 1],
  k = 2;
var expected = 10;
var result = maxProfit(prices, strategy, k);
console.log(result, result === expected);

var prices = [5, 4, 3],
  strategy = [1, 1, 0],
  k = 2;
var expected = 9;
var result = maxProfit(prices, strategy, k);
console.log(result, result === expected);
