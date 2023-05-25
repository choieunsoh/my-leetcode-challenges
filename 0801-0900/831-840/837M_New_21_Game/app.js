// 837. New 21 Game
// https://leetcode.com/problems/new-21-game/
/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {
  if (k <= 0) return 1;
  if (n >= k + maxPts) return 1;

  let result = 0;
  let sum = 1;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    dp[i] = sum / maxPts;
    if (i < k) {
      sum += dp[i];
    } else {
      result += dp[i];
    }
    if (i - maxPts >= 0) {
      sum -= dp[i - maxPts];
    }
  }
  return Number(result.toFixed(5));
};

var n = 10,
  k = 1,
  maxPts = 10;
var expected = 1.0;
var result = new21Game(n, k, maxPts);
console.log(result, result === expected);

var n = 6,
  k = 1,
  maxPts = 10;
var expected = 0.6;
var result = new21Game(n, k, maxPts);
console.log(result, result === expected);

var n = 21,
  k = 17,
  maxPts = 10;
var expected = 0.73278;
var result = new21Game(n, k, maxPts);
console.log(result, result === expected);
