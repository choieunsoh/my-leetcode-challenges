// 714. Best Time to Buy and Sell Stock with Transaction Fee
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let profit = 0;
  let buy = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    const prevProfit = profit;
    profit = Math.max(profit, buy + prices[i] - fee);
    buy = Math.max(buy, prevProfit - prices[i]);
  }
  return profit;
};

var prices = [1, 3, 2, 8, 4, 9],
  fee = 2;
var expected = 8;
var result = maxProfit(prices, fee);
console.log(result, result === expected);

var prices = [1, 3, 7, 5, 10, 3],
  fee = 3;
var expected = 6;
var result = maxProfit(prices, fee);
console.log(result, result === expected);
