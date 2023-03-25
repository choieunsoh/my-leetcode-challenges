// 1608. Special Array With X Elements Greater Than or Equal X
// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => b - a);
  nums.push(-1);

  for (let i = 0, prev = 0; i <= nums.length; i++) {
    if (nums[i] === nums[prev]) continue;
    if (i <= nums[prev] && i > nums[i]) return i;
    prev = i;
  }

  return -1;
};
var nums = [3, 5];
var expected = 2;
var result = specialArray(nums);
console.log(result, result === expected);

var nums = [0, 0];
var expected = -1;
var result = specialArray(nums);
console.log(result, result === expected);

var nums = [0, 4, 3, 0, 4];
var expected = 3;
var result = specialArray(nums);
console.log(result, result === expected);
