// 3634. Minimum Removals to Balance Array
// https://leetcode.com/problems/minimum-removals-to-balance-array/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function (nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let result = n;
  let left = 0;
  let right = 0;
  while (left < n) {
    while (right < n && nums[right] <= nums[left] * k) {
      right++;
    }
    result = Math.min(result, n - (right - left));
    left++;
  }
  return result;
};

var nums = [2, 1, 5],
  k = 2;
var expected = 1;
var result = minRemoval(nums, k);
console.log(result, result === expected);

var nums = [1, 6, 2, 9],
  k = 3;
var expected = 2;
var result = minRemoval(nums, k);
console.log(result, result === expected);

var nums = [4, 6],
  k = 2;
var expected = 0;
var result = minRemoval(nums, k);
console.log(result, result === expected);
