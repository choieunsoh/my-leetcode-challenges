// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - buy > profit) profit = prices[i] - buy;
    if (prices[i] < buy) buy = prices[i];
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
