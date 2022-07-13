// https://leetcode.com/problems/sort-an-array/
// 912. Sort an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  function divide(nums) {
    if (nums.length < 2) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = divide(nums.slice(0, mid));
    const right = divide(nums.slice(mid));
    return merge(left, right);
  }

  function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  }

  return divide(nums);
};

var nums = [5, 2, 3, 1];
var expected = [1, 2, 3, 5];
var result = sortArray(nums);
console.log(result, result.join() === expected.join());

var nums = [5, 1, 1, 2, 0, 0];
var expected = [0, 0, 1, 1, 2, 5];
var result = sortArray(nums);
console.log(result, result.join() === expected.join());
