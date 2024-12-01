// 1346. Check If N and Its Double Exist
// https://leetcode.com/problems/check-if-n-and-its-double-exist/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const double = new Map();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    double.set(num * 2, i);
  }
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const index = double.get(num) ?? -1;
    if (index !== -1 && index !== i) return true;
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
