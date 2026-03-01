// 1680. Concatenation of Consecutive Binary Numbers
// https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  const MOD = 1000000007n;
  let length = 0; // bit length of addends
  let result = 0n; // long accumulator
  for (let i = 1; i <= n; i++) {
    // when meets power of 2, increase the bit length
    if (Math.pow(2, Math.floor(Math.log(i) / Math.log(2))) === i) {
      length++;
    }
    result = (result * BigInt(Math.pow(2, length)) + BigInt(i)) % MOD;
  }
  return Number(result);
};

var n = 1;
var expected = 1;
var result = concatenatedBinary(n);
console.log(result, result === expected);

var n = 3;
var expected = 27;
var result = concatenatedBinary(n);
console.log(result, result === expected);

var n = 12;
var expected = 505379714;
var result = concatenatedBinary(n);
console.log(result, result === expected);
