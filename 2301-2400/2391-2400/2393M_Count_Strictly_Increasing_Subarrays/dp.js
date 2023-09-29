// 2393. Count Strictly Increasing Subarrays
// https://leetcode.com/problems/count-strictly-increasing-subarrays/
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
  let result = 1;
  let currCount = 1;
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      currCount++;
    } else {
      currCount = 1;
    }
    result += currCount;
  }
  return result;
};

var nums = [1, 3, 5, 4, 4, 6];
var expected = 10;
var result = countSubarrays(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = 15;
var result = countSubarrays(nums);
console.log(result, result === expected);
