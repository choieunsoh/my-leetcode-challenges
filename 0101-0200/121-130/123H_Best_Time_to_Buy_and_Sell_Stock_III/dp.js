// 123. Best Time to Buy and Sell Stock III
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/#/description
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit1 = 0;
  let profit2 = 0;
  let buy1 = Number.MIN_SAFE_INTEGER;
  let buy2 = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    profit2 = Math.max(profit2, buy2 + price);
    buy2 = Math.max(buy2, profit1 - price);
    profit1 = Math.max(profit1, buy1 + price);
    buy1 = Math.max(buy1, -price);
  }
  return profit2;
};

var prices = [3, 3, 5, 0, 0, 3, 1, 4];
var expected = 6;
var result = maxProfit(prices);
console.log(result, result === expected);

var prices = [1, 2, 3, 4, 5];
var expected = 4;
var result = maxProfit(prices);
console.log(result, result === expected);

var prices = [7, 6, 4, 3, 1];
var expected = 0;
var result = maxProfit(prices);
console.log(result, result === expected);
