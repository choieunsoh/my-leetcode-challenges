// 1416. Restore The Array
// https://leetcode.com/problems/restore-the-array/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function (s, k) {
  const MOD = 1e9 + 7;
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let start = 0; start < n; start++) {
    if (s.charAt(start) === '0') continue;
    for (let end = start; end < n; end++) {
      const num = Number(s.substring(start, end + 1));
      if (num > k) break;
      dp[end + 1] = (dp[end + 1] + dp[start]) % MOD;
    }
  }
  return dp[n];
};

var s = '1000',
  k = 10000;
var expected = 1;
var result = numberOfArrays(s, k);
console.log(result, result === expected);

var s = '1000',
  k = 10;
var expected = 0;
var result = numberOfArrays(s, k);
console.log(result, result === expected);

var s = '1317',
  k = 2000;
var expected = 8;
var result = numberOfArrays(s, k);
console.log(result, result === expected);
