// 309. Best Time to Buy and Sell Stock with Cooldown
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buy = Number.MIN_SAFE_INTEGER;
  let prevProfit = 0;
  for (const price of prices) {
    const temp = profit;
    profit = Math.max(profit, buy + price);
    buy = Math.max(buy, prevProfit - price);
    prevProfit = temp;
  }
  return profit;
};

var prices = [1, 2, 3, 0, 2];
var expected = 3;
var result = maxProfit(prices);
console.log(result, result === expected);

var prices = [1];
var expected = 0;
var result = maxProfit(prices);
console.log(result, result === expected);
