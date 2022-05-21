/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
};

console.time('simple');
var prices = [
  [7, 6, 4, 3, 1],
  [1, 2, 3, 4, 5],
  [7, 1, 5, 3, 6, 4],
];
for (const price of prices) {
  console.log(price, maxProfit(price));
}
console.timeEnd('simple');
