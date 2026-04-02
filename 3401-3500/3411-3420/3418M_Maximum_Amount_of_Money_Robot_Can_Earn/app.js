// 3418. Maximum Amount of Money Robot Can Earn
// https://leetcode.com/problems/maximum-amount-of-money-robot-can-earn/description/
// T.C.: O(m*n)
// S.C.: O(n)
/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function (coins) {
  const m = coins.length;
  const n = coins[0].length;
  const dp = new Array(m);

  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      dp[i][j] = new Array(3).fill(-Infinity);
    }
  }

  dp[0][0][0] = coins[0][0];
  for (let k = 1; k <= 2; k++) {
    dp[0][0][k] = Math.max(coins[0][0], 0);
  }

  for (let j = 1; j < n; j++) {
    dp[0][j][0] = dp[0][j - 1][0] + coins[0][j];
    for (let k = 1; k <= 2; k++) {
      dp[0][j][k] = Math.max(dp[0][j - 1][k] + coins[0][j], dp[0][j - 1][k - 1] + Math.max(coins[0][j], 0));
    }
  }

  for (let i = 1; i < m; i++) {
    dp[i][0][0] = dp[i - 1][0][0] + coins[i][0];
    for (let k = 1; k <= 2; k++) {
      dp[i][0][k] = Math.max(dp[i - 1][0][k] + coins[i][0], dp[i - 1][0][k - 1] + Math.max(coins[i][0], 0));
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i][j - 1][0]) + coins[i][j];

      for (let k = 1; k <= 2; k++) {
        dp[i][j][k] = Math.max(
          Math.max(dp[i - 1][j][k], dp[i][j - 1][k]) + coins[i][j],
          Math.max(dp[i - 1][j][k - 1], dp[i][j - 1][k - 1])
        );
      }
    }
  }

  return dp[m - 1][n - 1][2];
};

var coins = [
  [0, 1, -1],
  [1, -2, 3],
  [2, -3, 4],
];
var expected = 8;
var result = maximumAmount(coins);
console.log(result, result === expected);

var coins = [
  [10, 10, 10],
  [10, 10, 10],
];
var expected = 40;
var result = maximumAmount(coins);
console.log(result, result === expected);
