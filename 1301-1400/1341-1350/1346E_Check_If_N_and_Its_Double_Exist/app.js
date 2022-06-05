// https://leetcode.com/problems/check-if-n-and-its-double-exist/
// 1346. Check If N and Its Double Exist
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const double = {};
  for (let i = 0; i < arr.length; i++) {
    double[arr[i] * 2] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    if (double[arr[i]] !== undefined && double[arr[i]] !== i) return true;
  }
  return false;
};

var arr = [10, 2, 5, 3];
var expected = true;
console.log(checkIfExist(arr), expected);

var arr = [7, 1, 14, 11];
var expected = true;
console.log(checkIfExist(arr), expected);

var arr = [3, 1, 7, 11];
var expected = false;
console.log(checkIfExist(arr), expected);

var arr = [0, 0];
var expected = true;
console.log(checkIfExist(arr), expected);

var arr = [0, 1];
var expected = false;
console.log(checkIfExist(arr), expected);
