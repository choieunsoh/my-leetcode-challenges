// 1695. Maximum Erasure Value
// https://leetcode.com/problems/maximum-erasure-value/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  const n = nums.length;
  let result = 0;
  const set = new Set();
  for (let start = 0; start < n; start++) {
    set.clear();
    let currentSum = 0;
    for (let end = start; end < n && !set.has(nums[end]); end++) {
      currentSum += nums[end];
      set.add(nums[end]);
    }
    result = Math.max(result, currentSum);
  }
  return result;
};

var nums = [4, 2, 4, 5, 6];
var expected = 17;
var result = maximumUniqueSubarray(nums);
console.log(result, result === expected);

var nums = [5, 2, 1, 2, 5, 2, 1, 2, 5];
var expected = 8;
var result = maximumUniqueSubarray(nums);
console.log(result, result === expected);
