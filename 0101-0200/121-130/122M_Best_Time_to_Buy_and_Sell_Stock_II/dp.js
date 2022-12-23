// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buy = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    const prevProfit = profit;
    profit = Math.max(profit, buy + prices[i]);
    buy = Math.max(buy, prevProfit - prices[i]);
  }

  return profit;
};

console.time('me');
var prices = [
  [[7, 6, 4, 3, 1], 0],
  [[1, 2, 3, 4, 5], 4],
  [[7, 1, 5, 3, 6, 4], 7],
];
for (var [price, expected] of prices) {
  var result = maxProfit(price);
  console.log(price, result, result === expected);
}
console.timeEnd('me');
