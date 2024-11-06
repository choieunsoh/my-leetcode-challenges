// 3011. Find if Array Can Be Sorted
// https://leetcode.com/problems/find-if-array-can-be-sorted/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
  const n = nums.length;

  // Copy the original array to values
  const values = Array.from(nums);

  // First Pass: Iterate from left to right
  // Goal: Move the maximum value of each segment as far right as possible
  for (let i = 0; i < n - 1; i++) {
    if (values[i] <= values[i + 1]) {
      continue;
    } else {
      // Count the number of set bits using Integer.bitCount
      if (bitCount(values[i]) === bitCount(values[i + 1])) {
        // Swap them if they have the same number of set bits
        [values[i], values[i + 1]] = [values[i + 1], values[i]];
      } else {
        return false; // Return false if they cannot be swapped
      }
    }
  }

  // Second Pass: Iterate from right to left
  // Goal: Move the minimum value of each segment as far left as possible
  for (let i = n - 1; i >= 1; i--) {
    if (values[i] >= values[i - 1]) {
      continue;
    } else {
      // Count the number of set bits using Integer.bitCount
      if (bitCount(values[i]) === bitCount(values[i - 1])) {
        // Swap them if they have the same number of set bits
        [values[i], values[i - 1]] = [values[i - 1], values[i]];
      } else {
        return false; // Return false if they cannot be swapped
      }
    }
  }

  // If both passes complete without returning false, the array can be sorted
  return true;

  function bitCount(num) {
    let count = 0;
    while (num > 0) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  }
};

var nums = [8, 4, 2, 30, 15];
var expected = true;
var result = canSortArray(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = true;
var result = canSortArray(nums);
console.log(result, result === expected);

var nums = [3, 16, 8, 4, 2];
var expected = false;
var result = canSortArray(nums);
console.log(result, result === expected);

var nums = [1, 256, 64];
var expected = true;
var result = canSortArray(nums);
console.log(result, result === expected);
