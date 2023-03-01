// 912. Sort an Array
// https://leetcode.com/problems/sort-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  function divide(nums) {
    if (nums.length < 2) return nums;
    const mid = nums.length >> 1;
    const leftNums = divide(nums.slice(0, mid));
    const rightNums = divide(nums.slice(mid));
    return merge(leftNums, rightNums);
  }
  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    return result.concat(left.slice(i), right.slice(j));
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
