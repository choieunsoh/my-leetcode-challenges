// 1420. Build Array Where You Can Find The Maximum Exactly K Comparisons
// https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/
// T.C.: O(n * m * k)
// S.C.: O(m * k)
/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function (n, m, k) {
  const MOD = 1e9 + 7;
  let dp = createArray(m, k);
  let prevDp = createArray(m, k);
  let prefix = createArray(m, k);
  let prevPrefix = createArray(m, k);

  for (let num = 1; num <= m; num++) {
    dp[num][1] = 1;
  }

  for (let i = 1; i <= n; i++) {
    if (i > 1) {
      dp = createArray(m, k);
    }

    prefix = createArray(m, k);

    for (let maxNum = 1; maxNum <= m; maxNum++) {
      for (let cost = 1; cost <= k; cost++) {
        let count = (maxNum * prevDp[maxNum][cost]) % MOD;
        count = (count + prevPrefix[maxNum - 1][cost - 1]) % MOD;

        dp[maxNum][cost] = (dp[maxNum][cost] + count) % MOD;

        prefix[maxNum][cost] = prefix[maxNum - 1][cost] + dp[maxNum][cost];
        prefix[maxNum][cost] %= MOD;
      }
    }

    prevDp = dp;
    prevPrefix = prefix;
  }

  return prefix[m][k];

  function createArray(m, k) {
    return Array.from({ length: m + 1 }, () => new Array(k + 1).fill(0));
  }
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
