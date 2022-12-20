// 322. Coin Change
// https://leetcode.com/problems/coin-change/description/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
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
