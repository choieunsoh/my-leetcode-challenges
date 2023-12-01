// 1099. Two Sum Less Than K
// https://leetcode.com/problems/two-sum-less-than-k/
// T.C.: O(n log n)
// S.C.: O(log n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let result = -1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum < k) {
      result = Math.max(result, sum);
      left++;
    } else {
      right--;
    }
  }
  return result;
};

var nums = [34, 23, 1, 24, 75, 33, 54, 8],
  k = 60;
var expected = 58;
var result = twoSumLessThanK(nums, k);
console.log(result, result === expected);

var nums = [10, 20, 30],
  k = 15;
var expected = -1;
var result = twoSumLessThanK(nums, k);
console.log(result, result === expected);
