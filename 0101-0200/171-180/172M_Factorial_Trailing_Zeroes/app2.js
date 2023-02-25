// 172. Factorial Trailing Zeroes
// https://leetcode.com/problems/factorial-trailing-zeroes/
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let count = 0;
  while (n) {
    n = (n / 5) | 0;
    count += n;
  }
  return count;
};

var n = 3;
var expected = 0;
var result = trailingZeroes(n);
console.log(result, result === expected);

var n = 5;
var expected = 1;
var result = trailingZeroes(n);
console.log(result, result === expected);

var n = 0;
var expected = 0;
var result = trailingZeroes(n);
console.log(result, result === expected);

var n = 23;
var expected = 4;
var result = trailingZeroes(n);
console.log(result, result === expected);

var n = 101;
var expected = 24;
var result = trailingZeroes(n);
console.log(result, result === expected);
