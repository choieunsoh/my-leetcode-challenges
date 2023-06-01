// 188. Best Time to Buy and Sell Stock IV
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/#/description
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  let profits = Array(k + 1).fill(0);
  let buys = Array(k + 1).fill(Number.MIN_SAFE_INTEGER);
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    for (let j = k; j > 0; j--) {
      profits[j] = Math.max(profits[j], buys[j] + price);
      buys[j] = Math.max(buys[j], profits[j - 1] - price);
    }
  }
  return profits[k];
};

var k = 2,
  prices = [2, 4, 1];
var expected = 2;
var result = maxProfit(k, prices);
console.log(result, result === expected);

var k = 2,
  prices = [3, 2, 6, 5, 0, 3];
var expected = 7;
var result = maxProfit(k, prices);
console.log(result, result === expected);
