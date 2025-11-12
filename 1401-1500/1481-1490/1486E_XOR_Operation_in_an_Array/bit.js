// 1486. XOR Operation in an Array
// https://leetcode.com/problems/xor-operation-in-an-array/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  const xor0to = (x) => {
    if (x < 0) return 0;
    switch (x & 3) {
      case 0:
        return x;
      case 1:
        return 1;
      case 2:
        return x + 1;
      case 3:
        return 0;
    }
  };

  const s = start >> 1;
  const xorSeq = xor0to(s + n - 1) ^ xor0to(s - 1);
  const result = xorSeq << 1;

  // If start is odd, all numbers are odd → LSB depends on n
  if (start & 1) {
    return result | (n & 1);
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
