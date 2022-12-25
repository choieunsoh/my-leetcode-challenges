// 309. Best Time to Buy and Sell Stock with Cooldown
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
var maxProfit = function (prices: number[]): number {
  let profit = 0;
  let buy = Number.MIN_SAFE_INTEGER;
  let prevProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const temp = profit;
    profit = Math.max(profit, buy + prices[i]);
    buy = Math.max(buy, prevProfit - prices[i]);
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
