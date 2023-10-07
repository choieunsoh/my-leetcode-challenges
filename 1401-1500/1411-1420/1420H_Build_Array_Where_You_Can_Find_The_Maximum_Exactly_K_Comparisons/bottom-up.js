// 1420. Build Array Where You Can Find The Maximum Exactly K Comparisons
// https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/
// T.C.: O(n * m^2 * k)
// S.C.: O(n * m * k)
/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function (n, m, k) {
  const MOD = 1e9 + 7;
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => new Array(k + 1).fill(0)));
  for (let num = 0; num < dp[0].length; num++) {
    dp[n][num][0] = 1;
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let maxSoFar = m; maxSoFar >= 0; maxSoFar--) {
      for (let remain = 0; remain <= k; remain++) {
        let count = 0;
        for (let num = 1; num <= maxSoFar; num++) {
          count = (count + dp[i + 1][maxSoFar][remain]) % MOD;
        }

        if (remain > 0) {
          for (let num = maxSoFar + 1; num <= m; num++) {
            count = (count + dp[i + 1][num][remain - 1]) % MOD;
          }
        }

        dp[i][maxSoFar][remain] = count;
      }
    }
  }

  return dp[0][0][k];
};

var n = 2,
  m = 3,
  k = 1;
var expected = 6;
var result = numOfArrays(n, m, k);
console.log(result, result === expected);

var n = 5,
  m = 2,
  k = 3;
var expected = 0;
var result = numOfArrays(n, m, k);
console.log(result, result === expected);

var n = 9,
  m = 1,
  k = 1;
var expected = 1;
var result = numOfArrays(n, m, k);
console.log(result, result === expected);
