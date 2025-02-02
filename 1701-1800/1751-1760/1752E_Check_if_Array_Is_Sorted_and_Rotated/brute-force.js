// 1752. Check if Array Is Sorted and Rotated
// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const n = nums.length;

  // Construct the rotated array
  const checkSorted = new Array(n).fill(0);

  // Iterate through all possible rotation offsets
  for (let rotationOffset = 0; rotationOffset < n; rotationOffset++) {
    let currIndex = 0;
    for (let index = rotationOffset; index < n; index++) {
      checkSorted[currIndex++] = nums[index];
    }
    for (let index = 0; index < rotationOffset; index++) {
      checkSorted[currIndex++] = nums[index];
    }

    // Check if the constructed array is sorted
    let isSorted = true;
    for (let index = 0; index < n - 1; ++index) {
      if (checkSorted[index] > checkSorted[index + 1]) {
        isSorted = false;
        break;
      }
    }

    // If sorted, return true
    if (isSorted) {
      return true;
    }
  }

  // If no rotation makes the array sorted, return false
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
