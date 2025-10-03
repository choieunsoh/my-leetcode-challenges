// 3095. Shortest Subarray With OR at Least K I
// https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  const n = nums.length;
  let minLength = n + 1;
  let orVal = 0;
  for (let left = 0; left < n; left++) {
    orVal = 0;
    for (let right = left; right < n; right++) {
      orVal |= nums[right];
      if (orVal >= k) {
        minLength = Math.min(minLength, right - left + 1);
      }
    }
  }
  console.log(minLength);
  return minLength === n + 1 ? -1 : minLength;
};

var nums = [1, 2, 3],
  k = 2;
var expected = 1;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [2, 1, 8],
  k = 10;
var expected = 3;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [1, 2],
  k = 0;
var expected = 1;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [1, 12, 2, 5],
  k = 43;
var expected = -1;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [16, 1, 2, 20, 32],
  k = 45;
var expected = 2;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);

var nums = [2, 1, 8],
  k = 10;
var expected = 3;
var result = minimumSubarrayLength(nums, k);
console.log(result, result === expected);
