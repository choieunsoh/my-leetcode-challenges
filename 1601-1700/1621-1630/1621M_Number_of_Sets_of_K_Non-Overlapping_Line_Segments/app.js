// 1621. Number of Sets of K Non-Overlapping Line Segments
// https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/description/
// T.C.: O(k + log M)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function (n, k) {
  const MOD = 1000000007n;
  let numerator = 1n;
  let denominator = 1n;
  for (let i = 1; i <= 2 * k; i++) {
    numerator = (numerator * BigInt(n + k - i)) % MOD;
    denominator = (denominator * BigInt(i)) % MOD;
  }
  return Number((numerator * pow(denominator, MOD - 2n)) % MOD);

  function pow(a, e) {
    let result = 1n;
    while (e > 0n) {
      if (e & 1n) result = (result * a) % MOD;
      a = (a * a) % MOD;
      e >>= 1n;
    }
    return result;
  }
};

var n = 4,
  k = 2;
var expected = 5;
var result = numberOfSets(n, k);
console.log(result, result === expected);

var n = 3,
  k = 1;
var expected = 3;
var result = numberOfSets(n, k);
console.log(result, result === expected);

var n = 30,
  k = 7;
var expected = 796297179;
var result = numberOfSets(n, k);
console.log(result, result === expected);
