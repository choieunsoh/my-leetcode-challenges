// 313. Super Ugly Number
// https://leetcode.com/problems/super-ugly-number/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const dp = new Array(n);
  const nums = new Array(primes.length).fill(0);
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < primes.length; j++) {
      min = Math.min(min, primes[j] * dp[nums[j]]);
    }
    dp[i] = min;

    for (let j = 0; j < primes.length; j++) {
      if (min === primes[j] * dp[nums[j]]) {
        nums[j]++;
      }
    }
  }
  return dp[n - 1];
};

var n = 12,
  primes = [2, 7, 13, 19];
var expected = 32;
var result = nthSuperUglyNumber(n, primes);
console.log(result, result === expected);

var n = 1,
  primes = [2, 3, 5];
var expected = 1;
var result = nthSuperUglyNumber(n, primes);
console.log(result, result === expected);
