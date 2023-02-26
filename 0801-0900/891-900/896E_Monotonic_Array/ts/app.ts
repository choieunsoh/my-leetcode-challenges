// 896. Monotonic Array
// https://leetcode.com/problems/monotonic-array/
var isMonotonic = function (nums: number[]): boolean {
  let increasing = true;
  let decreasing = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) increasing = false;
    if (nums[i] > nums[i - 1]) decreasing = false;
    if (!increasing && !decreasing) return false;
  }
  return increasing || decreasing;
};

var nums = [1, 2, 2, 3];
var expected = true;
var result = isMonotonic(nums);
console.log(result, result === expected);

var nums = [6, 5, 4, 4];
var expected = true;
var result = isMonotonic(nums);
console.log(result, result === expected);

var nums = [1, 3, 2];
var expected = false;
var result = isMonotonic(nums);
console.log(result, result === expected);
