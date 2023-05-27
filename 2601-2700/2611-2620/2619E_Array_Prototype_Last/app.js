// 2619. Array Prototype Last
// https://leetcode.com/problems/array-prototype-last/
Array.prototype.last = function () {
  return this[this.length - 1] ?? -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
var nums = [1, 2, 3];
var expected = 3;
var result = nums.last();
console.log(result, result === expected);

var nums = [];
var expected = -1;
var result = nums.last();
console.log(result, result === expected);
