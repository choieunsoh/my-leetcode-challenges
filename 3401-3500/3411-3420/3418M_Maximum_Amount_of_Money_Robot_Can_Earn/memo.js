// 3418. Maximum Amount of Money Robot Can Earn
// https://leetcode.com/problems/maximum-amount-of-money-robot-can-earn/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function (coins) {
  const m = coins.length;
  const n = coins[0].length;
  const memo = new Array(m);

  for (let i = 0; i < m; i++) {
    memo[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      memo[i][j] = new Array(3).fill(-Infinity);
    }
  }

  return dfs(m - 1, n - 1, 2);

  function dfs(i, j, k) {
    if (i < 0 || j < 0) {
      return -Infinity;
    }

    const x = coins[i][j];
    if (i === 0 && j === 0) {
      return k > 0 ? Math.max(0, x) : x;
    }

    if (memo[i][j][k] !== -Infinity) {
      return memo[i][j][k];
    }

    let result = Math.max(dfs(i - 1, j, k), dfs(i, j - 1, k)) + x;
    if (k > 0 && x < 0) {
      result = Math.max(result, dfs(i - 1, j, k - 1), dfs(i, j - 1, k - 1));
    }

    memo[i][j][k] = result;
    return result;
  }
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
