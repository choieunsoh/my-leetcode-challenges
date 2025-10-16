// 2395. Find Subarrays With Equal Sum
// https://leetcode.com/problems/find-subarrays-with-equal-sum/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  const seen = new Set();
  for (let i = 1; i < nums.length; i++) {
    const sum = nums[i - 1] + nums[i];
    if (seen.has(sum)) {
      return true;
    }
    seen.add(sum);
  }
  return false;
};

var nums = [4, 2, 4];
var expected = true;
var result = findSubarrays(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = false;
var result = findSubarrays(nums);
console.log(result, result === expected);

var nums = [0, 0, 0];
var expected = true;
var result = findSubarrays(nums);
console.log(result, result === expected);
