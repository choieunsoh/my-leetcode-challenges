// 1346. Check If N and Its Double Exist
// https://leetcode.com/problems/check-if-n-and-its-double-exist/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const double = new Set();
  for (const num of arr) {
    if (double.has(2 * num)) return true;
    if (num % 2 === 0 && double.has(num / 2)) return true;
    double.add(num);
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
