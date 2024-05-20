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
  let result = 0;
  let left = 0;
  let right = 0;
  let sum = 0;
  const n = nums.length;
  while (right < n) {
    while (right < n && isValid()) {
      sum += nums[right];
      result += right - left;
      right++;
    }

    while (left < right && !isValid()) {
      sum -= nums[left];
      left++;
    }
  }

  result += right - left;
  return result;

  function isValid() {
    return sum * (right - left) < k;
  }
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
