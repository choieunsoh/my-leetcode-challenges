// 2571. Minimum Operations to Reduce an Integer to 0
// https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/
/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let result = 0;
  while (n) {
    const x = 2 ** Math.floor(Math.log2(n));
    const y = 2 ** Math.ceil(Math.log2(n));
    if (n - x <= y - n) {
      n = n - x;
    } else {
      n = y - n;
    }
    result++;
  }
  return result;
};

var n = 127;
var expected = 2;
var result = minOperations(n);
console.log(result, result === expected);

var n = 4;
var expected = 1;
var result = minOperations(n);
console.log(result, result === expected);

var n = 39;
var expected = 3;
var result = minOperations(n);
console.log(result, result === expected);

var n = 54;
var expected = 3;
var result = minOperations(n);
console.log(result, result === expected);
