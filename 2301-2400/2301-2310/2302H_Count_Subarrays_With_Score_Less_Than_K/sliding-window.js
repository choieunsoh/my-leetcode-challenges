// 2302. Count Subarrays With Score Less Than K
// https://leetcode.com/problems/count-subarrays-with-score-less-than-k/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const n = nums.length;
  let result = 0;
  let total = 0;
  for (let left = 0, right = 0; right < n; right++) {
    total += nums[right];
    while (left <= right && total * (right - left + 1) >= k) {
      total -= nums[left++];
    }
    result += right - left + 1;
  }
  return result;
};

var nums = [2, 1, 4, 3, 5],
  k = 10;
var expected = 6;
var result = countSubarrays(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 1],
  k = 5;
var expected = 5;
var result = countSubarrays(nums, k);
console.log(result, result === expected);
