// 3410. Maximize Subarray Sum After Removing All Occurrences of One Element
// https://leetcode.com/problems/maximize-subarray-sum-after-removing-all-occurrences-of-one-element/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySum = function (nums) {
  const pre = new Map();
  let result = nums[0];
  let prefix = 0;
  let low = 0;
  pre.set(0, 0);

  for (const num of nums) {
    prefix += num;
    result = Math.max(result, prefix - low);

    if (num < 0) {
      pre.set(num, Math.min(pre.get(num) ?? 0, pre.get(0)) + num);
      low = Math.min(low, pre.get(num));
    }

    pre.set(0, Math.min(pre.get(0), prefix));
    low = Math.min(low, pre.get(0));
  }

  return result;
};

var nums = [-3, 2, -2, -1, 3, -2, 3];
var expected = 7;
var result = maxSubarraySum(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = 10;
var result = maxSubarraySum(nums);
console.log(result, result === expected);
