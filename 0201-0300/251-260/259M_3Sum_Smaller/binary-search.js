// 259. 3Sum Smaller
// https://leetcode.com/problems/3sum-smaller/description/
// T.C.: O(n^2 log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += twoSumSmaller(nums, i + 1, target - nums[i]);
  }
  return result;

  function twoSumSmaller(nums, startIndex, target) {
    let sum = 0;
    for (let i = startIndex; i < nums.length - 1; i++) {
      const j = binarySearch(nums, i, target - nums[i]);
      sum += j - i;
    }
    return sum;
  }

  function binarySearch(nums, startIndex, target) {
    let left = startIndex;
    let right = nums.length - 1;
    while (left < right) {
      const mid = (left + right + 1) >> 1;
      if (nums[mid] < target) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }
};

var nums = [-2, 0, 1, 3],
  target = 2;
var expected = 2;
var result = threeSumSmaller(nums, target);
console.log(result, result === expected);

var nums = [],
  target = 0;
var expected = 0;
var result = threeSumSmaller(nums, target);
console.log(result, result === expected);

var nums = [0],
  target = 0;
var expected = 0;
var result = threeSumSmaller(nums, target);
console.log(result, result === expected);
