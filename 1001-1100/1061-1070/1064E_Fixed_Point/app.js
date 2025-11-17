// 1064. Fixed Point
// https://leetcode.com/problems/fixed-point/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (arr[mid] === mid) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] > mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
};

var arr = [-10, -5, 0, 3, 7];
var expected = 3;
var result = fixedPoint(arr);
console.log(result, result === expected);

var arr = [0, 2, 5, 8, 17];
var expected = 0;
var result = fixedPoint(arr);
console.log(result, result === expected);

var arr = [-10, -5, 3, 4, 7, 9];
var expected = -1;
var result = fixedPoint(arr);
console.log(result, result === expected);

var arr = [-10, -5, -2, 0, 4, 5, 6, 7, 8, 9, 10];
var expected = 4;
var result = fixedPoint(arr);
console.log(result, result === expected);
