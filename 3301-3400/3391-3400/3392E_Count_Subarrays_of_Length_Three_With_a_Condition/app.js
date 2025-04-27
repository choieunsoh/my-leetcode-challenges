// 3392. Count Subarrays of Length Three With a Condition
// https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i - 1] + nums[i + 1] === nums[i] / 2) count++;
  }
  return count;
};

var nums = [1, 2, 1, 4, 1];
var expected = 1;
var result = countSubarrays(nums);
console.log(result, result === expected);

var nums = [1, 1, 1];
var expected = 0;
var result = countSubarrays(nums);
console.log(result, result === expected);
