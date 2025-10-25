// 2119. A Number After a Double Reversal
// https://leetcode.com/problems/a-number-after-a-double-reversal/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  if (num === 0) return true;
  return num % 10 !== 0;
};

var num = 526;
var expected = true;
var result = isSameAfterReversals(num);
console.log(result, result === expected);

var num = 1800;
var expected = false;
var result = isSameAfterReversals(num);
console.log(result, result === expected);

var num = 0;
var expected = true;
var result = isSameAfterReversals(num);
console.log(result, result === expected);
