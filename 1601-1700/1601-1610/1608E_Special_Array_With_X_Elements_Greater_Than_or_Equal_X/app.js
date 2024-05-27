// 1608. Special Array With X Elements Greater Than or Equal X
// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b);
  for (let target = nums.length; target >= 0; target--) {
    const greaterThanTarget = binarySearch(target);
    if (greaterThanTarget) return target;
  }
  return -1;

  function binarySearch(target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    const greaterThanTarget = nums.length - left;
    return greaterThanTarget === target;
  }
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
