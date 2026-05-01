// 396. Rotate Function
// https://leetcode.com/problems/rotate-function/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  const n = nums.length;
  let f = 0;
  let total = 0;
  for (let i = 0; i < n; i++) {
    f += i * nums[i];
    total += nums[i];
  }

  let result = f;
  for (let i = n - 1; i > 0; i--) {
    f += total - n * nums[i];
    result = Math.max(result, f);
  }
  return result;
};

var nums = [4, 3, 2, 6];
var expected = 26;
var result = maxRotateFunction(nums);
console.log(result, result === expected);

var nums = [100];
var expected = 0;
var result = maxRotateFunction(nums);
console.log(result, result === expected);
