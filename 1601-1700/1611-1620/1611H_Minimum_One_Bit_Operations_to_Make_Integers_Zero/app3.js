// 1611. Minimum One Bit Operations to Make Integers Zero
// https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function (n) {
  let result = n;
  result ^= result >> 16;
  result ^= result >> 8;
  result ^= result >> 4;
  result ^= result >> 2;
  result ^= result >> 1;
  return result;
};

var n = 3;
var expected = 2;
var result = minimumOneBitOperations(n);
console.log(result, result === expected);

var n = 6;
var expected = 4;
var result = minimumOneBitOperations(n);
console.log(result, result === expected);
