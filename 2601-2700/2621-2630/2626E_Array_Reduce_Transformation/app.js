// 2626. Array Reduce Transformation
// https://leetcode.com/problems/array-reduce-transformation/
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};

var nums = [1, 2, 3, 4],
  fn = function sum(accum, curr) {
    return accum + curr;
  },
  init = 0;
var expected = 10;
var result = reduce(nums, fn, init);
console.log(result, result === expected);

var nums = [1, 2, 3, 4],
  fn = function sum(accum, curr) {
    return accum + curr * curr;
  },
  init = 100;
var expected = 130;
var result = reduce(nums, fn, init);
console.log(result, result === expected);

var nums = [],
  fn = function sum(accum, curr) {
    return 0;
  },
  init = 25;
var expected = 25;
var result = reduce(nums, fn, init);
console.log(result, result === expected);
