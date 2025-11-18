// 1009. Complement of Base 10 Integer
// https://leetcode.com/problems/complement-of-base-10-integer/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  if (n == 0) return 1;
  let todo = n;
  let bit = 1;
  while (todo != 0) {
    n = n ^ bit;
    bit = bit << 1;
    todo = todo >> 1;
  }
  return n;
};

var n = 5;
var expected = 2;
var result = bitwiseComplement(n);
console.log(result, result === expected);

var n = 7;
var expected = 0;
var result = bitwiseComplement(n);
console.log(result, result === expected);

var n = 10;
var expected = 5;
var result = bitwiseComplement(n);
console.log(result, result === expected);
