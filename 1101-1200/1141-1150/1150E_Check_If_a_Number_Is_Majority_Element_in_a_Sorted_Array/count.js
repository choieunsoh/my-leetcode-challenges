// 1150. Check If a Number Is Majority Element in a Sorted Array
// https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function (nums, target) {
  let count = 0;
  for (const num of nums) {
    if (num === target) count++;
  }
  return count > nums.length / 2;
};

var nums = [2, 4, 5, 5, 5, 5, 5, 6, 6],
  target = 5;
var expected = true;
var result = isMajorityElement(nums, target);
console.log(result, result === expected);

var nums = [10, 100, 101, 101],
  target = 101;
var expected = false;
var result = isMajorityElement(nums, target);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5],
  target = 3;
var expected = false;
var result = isMajorityElement(nums, target);
console.log(result, result === expected);
