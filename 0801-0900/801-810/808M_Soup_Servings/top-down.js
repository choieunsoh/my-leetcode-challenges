// 808. Soup Servings
// https://leetcode.com/problems/soup-servings
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
  if (n >= 4800) return 1.0;
  const m = Math.ceil(n / 25);
  const dp = Array.from({ length: m + 1 }, () => new Array(m + 1).fill(0.0));
  for (let k = 1; k <= m; k++) {
    if (calculateDP(k, k, dp) > 1 - 1e-5) {
      return 1.0;
    }
  }
  return calculateDP(m, m);

  function calculateDP(i, j) {
    if (i <= 0 && j <= 0) {
      return 0.5;
    }
    if (i <= 0) {
      return 1.0;
    }
    if (j <= 0) {
      return 0.0;
    }
    if (dp[i][j]) {
      return dp[i][j];
    }
    const result =
      (calculateDP(i - 4, j) + calculateDP(i - 3, j - 1) + calculateDP(i - 2, j - 2) + calculateDP(i - 1, j - 3)) / 4.0;
    dp[i][j] = result;
    return result;
  }
};

var n = 50;
var expected = 0.625;
var result = soupServings(n);
console.log(result, result === expected);

var n = 100;
var expected = 0.71875;
var result = soupServings(n);
console.log(result, result === expected);
