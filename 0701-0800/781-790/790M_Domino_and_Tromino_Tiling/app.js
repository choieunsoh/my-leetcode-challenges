// 790. Domino and Tromino Tiling
// https://leetcode.com/problems/domino-and-tromino-tiling/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  const MOD = 1e9 + 7;
  if (n <= 2) return n;

  const dp = new Array(n).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;
  for (let i = 4; i <= n; i++) {
    dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD;
  }
  return dp[n];
};

var n = 3;
var expected = 5;
var result = numTilings(n);
console.log(result, result === expected);

var n = 1;
var expected = 1;
var result = numTilings(n);
console.log(result, result === expected);
