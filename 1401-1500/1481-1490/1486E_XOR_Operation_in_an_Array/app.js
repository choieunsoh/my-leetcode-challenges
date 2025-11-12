// 1486. XOR Operation in an Array
// https://leetcode.com/problems/xor-operation-in-an-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result ^= start + 2 * i;
  }
  return result;
};

var n = 5,
  start = 0;
var expected = 8;
var result = xorOperation(n, start);
console.log(result, result === expected);

var n = 4,
  start = 3;
var expected = 8;
var result = xorOperation(n, start);
console.log(result, result === expected);
