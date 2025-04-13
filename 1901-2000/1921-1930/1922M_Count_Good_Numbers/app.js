// 1922. Count Good Numbers
// https://leetcode.com/problems/count-good-numbers/description/
// Fast Exponentiation
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
  const MOD = BigInt(1e9 + 7);

  // use fast exponentiation to calculate x^y % mod
  function quickMul(x, y) {
    let ret = 1n;
    let mul = x;
    while (y > 0) {
      if (y % 2n === 1n) {
        ret = (ret * mul) % MOD;
      }
      mul = (mul * mul) % MOD;
      y = y / 2n;
    }
    return ret;
  }

  // 5^((n + 1) / 2) * 4^(n / 2)
  return Number((quickMul(5n, BigInt(n + 1) / 2n) * quickMul(4n, BigInt(n) / 2n)) % MOD);
};

var n = 1;
var expected = 5;
var result = countGoodNumbers(n);
console.log(result, result === expected);

var n = 4;
var expected = 400;
var result = countGoodNumbers(n);
console.log(result, result === expected);

var n = 50;
var expected = 564908303;
var result = countGoodNumbers(n);
console.log(result, result === expected);
