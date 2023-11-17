// 1877. Minimize Maximum Pair Sum in Array
// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = Number.MIN_SAFE_INTEGER;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left++] + nums[right--];
    result = Math.max(result, sum);
  }
  return result;
};

var nums = [3, 5, 2, 3];
var expected = 7;
var result = minPairSum(nums);
console.log(result, result === expected);

var nums = [3, 5, 4, 2, 4, 6];
var expected = 8;
var result = minPairSum(nums);
console.log(result, result === expected);
