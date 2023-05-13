// 2466. Count Ways To Build Good Strings
// https://leetcode.com/problems/count-ways-to-build-good-strings/
/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  const MOD = 1e9 + 7;
  const dp = new Array(high + 1).fill(-1);
  dp[0] = 1;

  let result = 0;
  for (let i = low; i <= high; i++) {
    result += dfs(i, zero, one);
    result %= MOD;
  }
  return result;

  function dfs(end, zero, one) {
    if (dp[end] !== -1) return dp[end];

    let count = 0;
    if (end >= one) {
      count += dfs(end - one, zero, one);
    }
    if (end >= zero) {
      count += dfs(end - zero, zero, one);
    }
    dp[end] = count % MOD;
    return dp[end];
  }
};

var low = 3,
  high = 3,
  zero = 1,
  one = 1;
var expected = 8;
var result = countGoodStrings(low, high, zero, one);
console.log(result, result === expected);

var low = 2,
  high = 3,
  zero = 1,
  one = 2;
var expected = 5;
var result = countGoodStrings(low, high, zero, one);
console.log(result, result === expected);
