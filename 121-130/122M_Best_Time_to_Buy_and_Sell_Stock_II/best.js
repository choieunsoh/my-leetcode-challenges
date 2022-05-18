/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length,
    dp = Array(len);
  dp[0] = 0;

  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 1] + (prices[i] - prices[i - 1]));
  }

  return dp[len - 1];
};

console.time('best');
var prices = [
  [7, 6, 4, 3, 1],
  [1, 2, 3, 4, 5],
  [7, 1, 5, 3, 6, 4],
];
for (const price of prices) {
  console.log(price, maxProfit(price));
}
console.timeEnd('best');
