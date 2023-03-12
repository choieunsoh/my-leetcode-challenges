// 322. Coin Change
// https://leetcode.com/problems/coin-change/description/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const MAX = amount + 1;
  const dp = Array(MAX).fill(MAX);
  dp[0] = 0;
  coins.sort((a, b) => a - b);
  for (const coin of coins) {
    for (let value = coin; value <= amount; value++) {
      const change = value - coin;
      if (change < 0) continue;
      dp[value] = Math.min(dp[value], dp[change] + 1);
    }
  }

  if (dp[amount] === MAX) return -1;
  return dp[amount];
};

var coins = [1, 2, 5],
  amount = 11;
var expected = 3;
var result = coinChange(coins, amount);
console.log(result, result === expected);

var coins = [2],
  amount = 3;
var expected = -1;
var result = coinChange(coins, amount);
console.log(result, result === expected);

var coins = [1],
  amount = 0;
var expected = 0;
var result = coinChange(coins, amount);
console.log(result, result === expected);
