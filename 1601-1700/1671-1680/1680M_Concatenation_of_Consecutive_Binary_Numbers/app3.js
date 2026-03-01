// 1680. Concatenation of Consecutive Binary Numbers
// https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  const MOD = 1000000007n;
  let result = 0n;
  for (let i = 1; i <= n; i++) {
    let binary = i.toString(2);
    for (let j = 0; j < binary.length; j++) {
      result = (result * 2n + BigInt(binary[j] - '0')) % MOD;
    }
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
