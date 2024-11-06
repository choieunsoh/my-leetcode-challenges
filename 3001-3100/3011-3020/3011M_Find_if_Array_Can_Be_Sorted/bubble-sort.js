// 3011. Find if Array Can Be Sorted
// https://leetcode.com/problems/find-if-array-can-be-sorted/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
  // Avoid modifying the input directly
  const values = Array.from(nums);
  const n = values.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (values[j] <= values[j + 1]) {
        // No swap needed
        continue;
      } else if (bitCount(values[j]) === bitCount(values[j + 1])) {
        // Swap the elements
        [values[j], values[j + 1]] = [values[j + 1], values[j]];
      } else {
        return false;
      }
    }
  }
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
