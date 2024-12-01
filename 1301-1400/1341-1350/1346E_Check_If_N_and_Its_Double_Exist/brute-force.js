// 1346. Check If N and Its Double Exist
// https://leetcode.com/problems/check-if-n-and-its-double-exist/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  // Step 1: Iterate through all pairs of indices
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // Step 2: Check the conditions
      if (i !== j && arr[i] === 2 * arr[j]) {
        return true;
      }
    }
  }
  // No valid pair found
  return false;
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
