// 1752. Check if Array Is Sorted and Rotated
// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let count = 0;
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) count++;
  }

  if (nums[n - 1] > nums[0]) count++;
  return count === 1;
};

var nums = [3, 4, 5, 1, 2];
var expected = true;
var result = check(nums);
console.log(result, result === expected);

var nums = [2, 1, 3, 4];
var expected = false;
var result = check(nums);
console.log(result, result === expected);

var nums = [1, 2, 3];
var expected = true;
var result = check(nums);
console.log(result, result === expected);

var nums = [3, 6, 10, 1, 8, 9, 9, 8, 9];
var expected = false;
var result = check(nums);
console.log(result, result === expected);

var nums = [6, 10, 6];
var expected = true;
var result = check(nums);
console.log(result, result === expected);

var nums = [7, 9, 1, 1, 1, 3];
var expected = true;
var result = check(nums);
console.log(result, result === expected);
