// 1346. Check If N and Its Double Exist
// https://leetcode.com/problems/check-if-n-and-its-double-exist/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const map = new Map();

  for (const num of arr) {
    // Count occurrences of each number
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  for (const num of arr) {
    // Check for double
    if (num !== 0 && map.has(2 * num)) {
      return true;
    }
    // Handle zero case (ensure there are at least two zeros)
    if (num === 0 && map.get(num) > 1) {
      return true;
    }
  }
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
