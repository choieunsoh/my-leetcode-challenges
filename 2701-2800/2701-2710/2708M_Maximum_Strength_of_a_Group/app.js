// 2708. Maximum Strength of a Group
// https://leetcode.com/problems/maximum-strength-of-a-group/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function (nums) {
  let result = 1;
  nums.sort((a, b) => a - b);
  const neg = nums.filter((n) => n < 0);
  const pos = nums.filter((n) => n > 0);
  const x = neg.length & 1 ? neg.length - 1 : neg.length; // Math.floor(neg.length / 2) + 1;
  for (let i = 0; i < x; i++) {
    result *= neg[i];
  }
  for (const num of pos) {
    result *= num;
  }

  if (neg.length < 2 && pos.length === 0) return nums[nums.length - 1];
  return result;
};

var nums = [3, -1, -5, 2, 5, -9];
var expected = 1350;
var result = maxStrength(nums);
console.log(result, result === expected);

var nums = [-4, -5, -4];
var expected = 20;
var result = maxStrength(nums);
console.log(result, result === expected);

var nums = [-2, -3, 8, 9];
var expected = 432;
var result = maxStrength(nums);
console.log(result, result === expected);

var nums = [-2, 0];
var expected = 0;
var result = maxStrength(nums);
console.log(result, result === expected);

var nums = [-2];
var expected = -2;
var result = maxStrength(nums);
console.log(result, result === expected);
