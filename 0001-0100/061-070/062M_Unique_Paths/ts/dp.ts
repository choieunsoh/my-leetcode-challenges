// 62. Unique Paths
// https://leetcode.com/problems/unique-paths/
var uniquePaths = function (m: number, n: number): number {
  let dp = Array(n + 1).fill(0);
  dp[n - 1] = 1;
  for (let i = m - 1; i >= 0; i--) {
    const curr = Array(n + 1).fill(0);
    for (let j = n - 1; j >= 0; j--) {
      curr[j] = dp[j] + curr[j + 1];
    }
    dp = curr;
  }
  return dp[0];
};

var m = 3,
  n = 7;
var expected = 28;
var result = uniquePaths(m, n);
console.log(result, result === expected);

var m = 3,
  n = 2;
var expected = 3;
var result = uniquePaths(m, n);
console.log(result, result === expected);
