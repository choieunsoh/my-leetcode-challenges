// 2595. Number of Even and Odd Bits
// https://leetcode.com/problems/number-of-even-and-odd-bits/
/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  const result = [0, 0];
  let odd = 0;
  while (n) {
    if (n & 1) {
      result[odd]++;
    }
    odd ^= 1;
    n >>= 1;
  }
  return result;
};

var n = 17;
var expected = [2, 0];
var result = evenOddBit(n);
console.log(result, result.join() === expected.join());

var n = 2;
var expected = [0, 1];
var result = evenOddBit(n);
console.log(result, result.join() === expected.join());
