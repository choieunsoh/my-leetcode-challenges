// 795. Number of Subarrays with Bounded Maximum
// https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  let result = 0;
  let start = 0;
  let count = 0;
  for (let end = 0; end < nums.length; end++) {
    const num = nums[end];
    if (num >= left && num <= right) {
      count = end - start + 1;
    } else if (num >= left) {
      count = 0;
      start = end + 1;
    }
    result += count;
  }
  return result;
};

var nums = [2, 1, 4, 3],
  left = 2,
  right = 3;
var expected = 3;
var result = numSubarrayBoundedMax(nums, left, right);
console.log(result, result === expected);

var nums = [2, 9, 2, 5, 6],
  left = 2,
  right = 8;
var expected = 7;
var result = numSubarrayBoundedMax(nums, left, right);
console.log(result, result === expected);

var nums = [2, 2, 3, 3],
  left = 2,
  right = 3;
var expected = 10;
var result = numSubarrayBoundedMax(nums, left, right);
console.log(result, result === expected);
