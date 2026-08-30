// 2091. Removing Minimum and Maximum From Array
// https://leetcode.com/problems/removing-minimum-and-maximum-from-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
  const n = nums.length;
  let minidx = 0;
  let maxidx = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] < nums[minidx]) {
      minidx = i;
    }
    if (nums[i] > nums[maxidx]) {
      maxidx = i;
    }
  }

  const left = Math.min(minidx, maxidx);
  const right = Math.max(minidx, maxidx);
  return Math.min(right + 1, n - left, left + 1 + n - right);
};

var nums = [2, 10, 7, 5, 4, 1, 8, 6];
var expected = 5;
var result = minimumDeletions(nums);
console.log(result, result === expected);

var nums = [0, -4, 19, 1, 8, -2, -3, 5];
var expected = 3;
var result = minimumDeletions(nums);
console.log(result, result === expected);

var nums = [101];
var expected = 1;
var result = minimumDeletions(nums);
console.log(result, result === expected);
