// 3405. Count the Number of Arrays with K Matching Adjacent Elements
// https://leetcode.com/problems/count-the-number-of-arrays-with-k-matching-adjacent-elements/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var countGoodArrays = function (n, m, k) {
  const MOD = BigInt(1e9 + 7);
  n = BigInt(n);
  m = BigInt(m);
  k = BigInt(k);

  // Computing factorials needed
  const fact = Array(Number(n) + 1).fill(BigInt(1));
  for (let i = 2; i <= Number(n); ++i) {
    fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
  }

  let result = nCr(n - BigInt(1), k, fact); // For an array of size n, there are n-1 adjacent positions. Choose k of n-1 positions.
  result = (result * m) % MOD; // Each of the k pairs can have m values.
  result = (result * exponent(m - BigInt(1), n - k - BigInt(1), MOD)) % MOD; // Remaining (n-1)-k adjacent pairs each have (m-1) allowed values.
  return Number(result);

  // Base to the power exp
  function exponent(base, exp, mod) {
    base = BigInt(base);
    exp = BigInt(exp);
    mod = BigInt(mod);
    let result = BigInt(1);
    while (exp > 0) {
      if (exp % BigInt(2) === BigInt(1)) {
        result = (result * base) % mod;
      }
      base = (base * base) % mod;
      exp = exp / BigInt(2);
    }
    return result;
  }

  // Fermat's little theorem
  // If n is prime, a^(n-1) mod p = 1. Dividing by a -> a^(n-2) mod p is equivalent to 1/a mod p
  function modInverse(x, mod) {
    return exponent(x, mod - BigInt(2), mod);
  }

  // Combinations function
  function nCr(n, r, fact) {
    return (((fact[n] * modInverse(fact[r], MOD)) % MOD) * modInverse(fact[n - r], MOD)) % MOD;
    // We use Fermat's theorem instead of n!/r!(n-r)! since JavaScript numbers may overflow
  }
};

var n = 3,
  m = 2,
  k = 1;
var expected = 4;
var result = countGoodArrays(n, m, k);
console.log(result, result === expected);

var n = 4,
  m = 2,
  k = 2;
var expected = 6;
var result = countGoodArrays(n, m, k);
console.log(result, result === expected);

var n = 5,
  m = 2,
  k = 0;
var expected = 2;
var result = countGoodArrays(n, m, k);
console.log(result, result === expected);
