// 1752. Check if Array Is Sorted and Rotated
// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const size = nums.length;

  // Create a sorted copy of the array
  const sortedNums = Array.from(nums);
  nums.sort((a, b) => a - b);

  // Compare the original array with the sorted array, considering all possible rotations
  for (let rotationOffset = 0; rotationOffset < size; ++rotationOffset) {
    let isMatch = true;
    for (let index = 0; index < size; ++index) {
      if (nums[(rotationOffset + index) % size] !== sortedNums[index]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      return true;
    }
  }

  return false;
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
