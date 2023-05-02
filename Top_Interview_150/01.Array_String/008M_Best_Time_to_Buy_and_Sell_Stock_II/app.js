// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// General Buy/Sell Stock Templates
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/108870/most-consistent-ways-of-dealing-with-the-series-of-stock-problems/
// k = no of transactions
// 0 = profit, 1 = buy
// t_ik0_old = t_ik0
// eq1: t_ik0 = max(t_ik0, t_ik1 + price)
// eq2: t_ik1 = max(t_ik1, t_ik0_old - price)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buy = -Infinity;
  for (const price of prices) {
    const prevProfit = profit;
    profit = Math.max(profit, buy + price);
    buy = Math.max(buy, prevProfit - price);
  }

  return profit;
};

var prices = [7, 1, 5, 3, 6, 4];
var expected = 7;
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
