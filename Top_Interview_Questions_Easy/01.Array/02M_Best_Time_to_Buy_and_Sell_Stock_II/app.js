// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buyDay = 0;
  let sellDay = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] < prices[i]) {
      profit += prices[sellDay] - prices[buyDay];
      buyDay = i + 1;
      sellDay = buyDay;
    } else {
      sellDay = i + 1;
    }
  }

  profit += prices[sellDay] - prices[buyDay];

  return profit;
};

console.time('me');
var prices = [
  [7, 6, 4, 3, 1],
  [1, 2, 3, 4, 5],
  [7, 1, 5, 3, 6, 4],
];
for (const price of prices) {
  console.log(price, maxProfit(price));
}
console.timeEnd('me');
