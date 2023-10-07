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
  const memo = Array.from({ length: n }, () => Array.from({ length: m + 1 }, () => new Array(k + 1).fill(-1)));
  return solve(0, 0, k);

  function solve(i, maxSoFar, remain) {
    if (i === n) {
      return remain ? 0 : 1;
    }

    if (remain < 0) {
      return 0;
    }

    if (memo[i][maxSoFar][remain] !== -1) {
      return memo[i][maxSoFar][remain];
    }

    let count = 0;
    for (let num = 1; num <= maxSoFar; num++) {
      count = (count + solve(i + 1, maxSoFar, remain)) % MOD;
    }

    for (let num = maxSoFar + 1; num <= m; num++) {
      count = (count + solve(i + 1, num, remain - 1)) % MOD;
    }

    return (memo[i][maxSoFar][remain] = count);
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
