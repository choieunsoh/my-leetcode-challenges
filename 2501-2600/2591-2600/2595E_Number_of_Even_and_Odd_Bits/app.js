// 2595. Number of Even and Odd Bits
// https://leetcode.com/problems/number-of-even-and-odd-bits/
/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  const result = [0, 0];
  const nums = n.toString(2);
  let odd = (nums.length + 1) & 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums.charAt(i) === '1') {
      result[odd]++;
    }
    odd ^= 1;
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
