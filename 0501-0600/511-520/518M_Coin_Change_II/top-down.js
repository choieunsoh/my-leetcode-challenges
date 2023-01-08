// 518. Coin Change II
// https://leetcode.com/problems/coin-change-ii/
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = Array(coins.length)
    .fill(0)
    .map(() => Array(amount + 1));
  return dfs(0, 0);

  function dfs(index, sum) {
    if (sum === amount) return 1;
    if (sum > amount || index === coins.length) return 0;
    if (dp[index][sum] !== undefined) return dp[index][sum];

    let count = 0;
    for (let i = index; i < coins.length; i++) {
      count += dfs(i, sum + coins[i]);
    }

    dp[index][sum] = count;
    return count;
  }
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
