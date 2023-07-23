// 2789. Largest Element in an Array after Merge Operations
// https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function (nums) {
  let result = Math.max(...nums);
  const n = nums.length;
  for (let i = n - 1; i > 0; i--) {
    const curr = nums[i];
    const prev = nums[i - 1];
    if (prev > curr) continue;
    nums[i - 1] = curr + prev;
    result = Math.max(result, nums[i - 1]);
  }
  return result;
};

var nums = [2, 3, 7, 9, 3];
var expected = 21;
var result = maxArrayValue(nums);
console.log(result, result === expected);

var nums = [5, 3, 3];
var expected = 11;
var result = maxArrayValue(nums);
console.log(result, result === expected);

var nums = [34, 95, 50, 12, 25, 100, 21, 3, 25, 16, 76, 73, 93, 46, 18];
var expected = 623;
var result = maxArrayValue(nums);
console.log(result, result === expected);
