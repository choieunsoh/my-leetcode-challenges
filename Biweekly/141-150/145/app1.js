/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  nums = [...new Set(nums)].sort((a, b) => b - a);
  if (nums.at(-1) < k) return -1;

  if (nums.at(-1) === k) return nums.length - 1;
  return nums.length;
};

var nums = [5, 2, 5, 4, 5],
  k = 2;
var expected = 2;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [2, 1, 2],
  k = 2;
var expected = -1;
var result = minOperations(nums, k);
console.log(result, result === expected);

var nums = [9, 7, 5, 3],
  k = 1;
var expected = 4;
var result = minOperations(nums, k);
console.log(result, result === expected);
