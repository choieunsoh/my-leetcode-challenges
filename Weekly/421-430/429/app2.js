/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function (nums, k) {};

var nums = [1, 2, 2, 3, 3, 4],
  k = 2;
var expected = 6;
var result = maxDistinctElements(nums, k);
console.log(result, result === expected);

var nums = [4, 4, 4, 4],
  k = 1;
var expected = 3;
var result = maxDistinctElements(nums, k);
console.log(result, result === expected);

// 5 6 7 6 7 8
// 5 6 7 8 9 10
var nums = [6, 7, 6, 6, 7],
  k = 1;
var expected = 4;
var result = maxDistinctElements(nums, k);
console.log(result, result === expected);

var nums = [6, 9, 6, 6, 9],
  k = 1;
var expected = 6;
var result = maxDistinctElements(nums, k);
console.log(result, result === expected);
