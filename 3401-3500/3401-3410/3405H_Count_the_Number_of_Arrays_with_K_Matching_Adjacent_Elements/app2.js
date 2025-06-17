// 3405. Count the Number of Arrays with K Matching Adjacent Elements
// https://leetcode.com/problems/count-the-number-of-arrays-with-k-matching-adjacent-elements/
// T.C.: O(log(n-k))
// S.C.: O(1)
const MOD = BigInt(1e9 + 7);
const MX = 100000;
const fact = new Array(MX).fill(0n);
const invFact = new Array(MX).fill(0n);

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
function countGoodArrays(n, m, k) {
  init();
  let res = comb(n - 1, k);
  res = (res * BigInt(m)) % MOD;
  res = (res * qPow(m - 1, n - k - 1)) % MOD;
  return Number(res);

  function qPow(x, n) {
    x = BigInt(x);
    n = BigInt(n);
    let res = 1n;
    while (n > 0n) {
      if (n & 1n) {
        res = (res * x) % MOD;
      }
      x = (x * x) % MOD;
      n >>= 1n;
    }
    return res;
  }

  function init() {
    if (fact[0] != 0) {
      return;
    }
    fact[0] = 1n;
    for (let i = 1; i < MX; i++) {
      fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
    }
    invFact[MX - 1] = qPow(fact[MX - 1], MOD - 2n);
    for (let i = MX - 2; i >= 0; i--) {
      invFact[i] = (invFact[i + 1] * BigInt(i + 1)) % MOD;
    }
  }

  function comb(n, m) {
    if (m < 0 || m > n) {
      return 0n;
    }
    return (((fact[n] * invFact[m]) % MOD) * invFact[n - m]) % MOD;
  }
}

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
