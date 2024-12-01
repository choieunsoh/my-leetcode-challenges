// 1346. Check If N and Its Double Exist
// https://leetcode.com/problems/check-if-n-and-its-double-exist/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  // Step 1: Sort the array
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    // Step 2: Calculate the target (double of current number)
    const target = 2 * arr[i];
    // Step 3: Custom binary search for the target
    const index = customBinarySearch(arr, target);
    // If the target exists and is not the same index
    if (index >= 0 && index !== i) {
      return true;
    }
  }
  // No valid pair found
  return false;

  function customBinarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      // Avoid potential overflow
      const mid = (left + right) >> 1;

      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1; // Target not found
  }
};

var arr = [10, 2, 5, 3];
var expected = true;
var result = checkIfExist(arr);
console.log(result, result === expected);

var arr = [7, 1, 14, 11];
var expected = true;
var result = checkIfExist(arr);
console.log(result, result === expected);

var arr = [3, 1, 7, 11];
var expected = false;
var result = checkIfExist(arr);
console.log(result, result === expected);

var arr = [0, 0];
var expected = true;
var result = checkIfExist(arr);
console.log(result, result === expected);

var arr = [0, 1];
var expected = false;
var result = checkIfExist(arr);
console.log(result, result === expected);

var arr = [4, -7, 11, 4, 18];
var expected = false;
var result = checkIfExist(arr);
console.log(result, result === expected);
