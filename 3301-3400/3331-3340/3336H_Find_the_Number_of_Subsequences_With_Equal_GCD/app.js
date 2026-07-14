// 3336. Find the Number of Subsequences With Equal GCD
// https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd/description/
// T.C.: O(n * m^2 * log m)
// S.C.: O(m^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function (nums) {
  const MOD = 1000000007;
  const m = Math.max(...nums);
  let dp = Array.from({ length: m + 1 }, () => new Array(m + 1).fill(0));
  dp[0][0] = 1;

  for (const num of nums) {
    const ndp = Array.from({ length: m + 1 }, () => new Array(m + 1).fill(0));

    for (let j = 0; j <= m; j++) {
      const divisor1 = gcd(j, num);
      const dpRow = dp[j];
      const ndpRow = ndp[j];
      const ndpD1Row = ndp[divisor1];

      for (let k = 0; k <= m; k++) {
        const val = dpRow[k];
        if (val === 0) continue;

        const divisor2 = gcd(k, num);
        ndpRow[k] = (ndpRow[k] + val) % MOD;
        ndpD1Row[k] = (ndpD1Row[k] + val) % MOD;
        ndpRow[divisor2] = (ndpRow[divisor2] + val) % MOD;
      }
    }
    dp = ndp;
  }

  let result = 0;
  for (let j = 1; j <= m; j++) {
    result = (result + dp[j][j]) % MOD;
  }

  return result;

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
};

var nums = [1, 2, 3, 4];
var expected = 10;
var result = subsequencePairCount(nums);
console.log(result, result === expected);

var nums = [10, 20, 30];
var expected = 2;
var result = subsequencePairCount(nums);
console.log(result, result === expected);

var nums = [1, 1, 1, 1];
var expected = 50;
var result = subsequencePairCount(nums);
console.log(result, result === expected);
