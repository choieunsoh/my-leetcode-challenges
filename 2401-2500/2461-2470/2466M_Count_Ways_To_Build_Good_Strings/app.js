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
  const dp = new Array(high + 1).fill(0);
  dp[0] = 1;

  for (let end = 1; end <= high; end++) {
    // check if the current string can be made by append zero `0`s or one `1`s.
    if (end >= zero) {
      dp[end] += dp[end - zero];
    }
    if (end >= one) {
      dp[end] += dp[end - one];
    }
    dp[end] %= MOD;
  }

  // Add up the number of strings with each valid length [low ~ high].
  let result = 0;
  for (let i = low; i <= high; i++) {
    result += dp[i];
    result %= MOD;
  }
  return result;
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
