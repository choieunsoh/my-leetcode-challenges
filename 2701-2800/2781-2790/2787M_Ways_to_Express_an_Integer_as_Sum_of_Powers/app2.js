// 2787. Ways to Express an Integer as Sum of Powers
// https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/
// T.C.: O(n * n^(1/x))
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function (n, x) {
  const MOD = 1e9 + 7;
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    const val = Math.pow(i, x);
    for (let j = 0; j <= n; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= val) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - val]) % MOD;
      }
    }
  }
  return dp[n][n];
};

var n = 10,
  x = 2;
var expected = 1;
var result = numberOfWays(n, x);
console.log(result, result === expected);

var n = 4,
  x = 1;
var expected = 2;
var result = numberOfWays(n, x);
console.log(result, result === expected);

var n = 160,
  x = 3;
var expected = 1;
var result = numberOfWays(n, x);
console.log(result, result === expected);

var n = 160,
  x = 5;
var expected = 0;
var result = numberOfWays(n, x);
console.log(result, result === expected);

var n = 75,
  x = 2;
var expected = 3;
var result = numberOfWays(n, x);
console.log(result, result === expected);

var n = 75,
  x = 1;
var expected = 48446;
var result = numberOfWays(n, x);
console.log(result, result === expected);

for (let i = 1; i <= 300; i++) {
  var result = numberOfWays(i, 1);
  console.log(i, result);
}
