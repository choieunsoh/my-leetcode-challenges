// 808. Soup Servings
// https://leetcode.com/problems/soup-servings
/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
  if (n >= 4800) return 1.0;
  n = Math.ceil(n / 25);
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0.0));
  dp[0][0] = 0.5;
  for (let i = 1; i <= n; i++) {
    dp[0][i] = 1.0;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = 0.25 * (find(i - 4, j) + find(i - 3, j - 1) + find(i - 2, j - 2) + find(i - 1, j - 3));
    }
  }
  return dp[n][n];

  function find(i, j) {
    if (i < 0) {
      i = 0;
    }
    if (j < 0) {
      j = 0;
    }
    return dp[i][j];
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
