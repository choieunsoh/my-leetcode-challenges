// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
var maxProfit = function (prices: number[]): number {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    profit = Math.max(profit, prices[i] - buy);
  }
  return profit;
};

var prices = [7, 1, 5, 3, 6, 4];
var expected = 5;
var result = maxProfit(prices);
console.log(result, result === expected);

var prices = [7, 6, 4, 3, 1];
var expected = 0;
var result = maxProfit(prices);
console.log(result, result === expected);
