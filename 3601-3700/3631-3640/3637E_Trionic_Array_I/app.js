// 3637. Trionic Array I
// https://leetcode.com/problems/trionic-array-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function (nums) {
  let increase = false;
  let decrease = false;
  const n = nums.length;
  let i = 1;
  while (i < n && nums[i] > nums[i - 1]) {
    increase = true;
    i++;
  }

  if (!increase) return false;

  while (i < n && nums[i] < nums[i - 1]) {
    decrease = true;
    i++;
  }

  if (!decrease) return false;

  increase = false;
  while (i < n && nums[i] > nums[i - 1]) {
    increase = true;
    i++;
  }

  if (!increase) return false;

  return i === n;
};

var nums = [1, 3, 5, 4, 2, 6];
var expected = true;
var result = isTrionic(nums);
console.log(result, result === expected);

var nums = [2, 1, 3];
var expected = false;
var result = isTrionic(nums);
console.log(result, result === expected);
