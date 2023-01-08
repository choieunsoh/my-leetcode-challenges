// 518. Coin Change II
// https://leetcode.com/problems/coin-change-ii/
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let target = coin; target <= amount; target++) {
      const remain = target - coin;
      dp[target] += dp[remain];
    }
  }

  return dp[amount];
};

var amount = 5,
  coins = [1, 2, 5];
var expected = 4;
var result = change(amount, coins);
console.log(result, result === expected);

var amount = 3,
  coins = [2];
var expected = 0;
var result = change(amount, coins);
console.log(result, result === expected);

var amount = 10,
  coins = [10];
var expected = 1;
var result = change(amount, coins);
console.log(result, result === expected);
