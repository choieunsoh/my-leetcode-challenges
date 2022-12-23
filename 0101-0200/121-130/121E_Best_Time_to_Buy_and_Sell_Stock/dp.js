// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// 121. Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = Number.MIN_SAFE_INTEGER;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    profit = Math.max(profit, buy + prices[i]);
    buy = Math.max(buy, -prices[i]);
  }

  return profit;
};

var prices = [7, 1, 5, 3, 6, 4];
var expect = 5;
var result = maxProfit(prices);
console.log(result, expect, result === expect);

var prices = [7, 6, 4, 3, 1];
var expect = 0;
var result = maxProfit(prices);
console.log(result, expect, result === expect);
