// 201. Bitwise AND of Numbers Range
// https://leetcode.com/problems/bitwise-and-of-numbers-range/
// Brian Kernighan's Algorithm
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  if (left === right || left === 0) return left;
  while (left < right) {
    right = right & (right - 1);
  }
  return left & right;
};

var left = 5,
  right = 7;
var expected = 4;
var result = rangeBitwiseAnd(left, right);
console.log(result, result === expected);

var left = 0,
  right = 0;
var expected = 0;
var result = rangeBitwiseAnd(left, right);
console.log(result, result === expected);

var left = 1,
  right = 2147483647;
var expected = 0;
var result = rangeBitwiseAnd(left, right);
console.log(result, result === expected);
