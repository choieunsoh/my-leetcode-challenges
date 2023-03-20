// 852. Peak Index in a Mountain Array
// https://seanprashad.com/leetcode-patterns/
/**
 * @param {number[]} arr
 * @return {number}
 *
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let index = 0;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (arr[mid + 1] < arr[mid]) {
      index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return index;
};

var arr = [0, 1, 0];
var expected = 1;
var result = peakIndexInMountainArray(arr);
console.log(result, expected, result === expected);

var arr = [0, 2, 1, 0];
var expected = 1;
var result = peakIndexInMountainArray(arr);
console.log(result, expected, result === expected);

var arr = [0, 10, 5, 2];
var expected = 1;
var result = peakIndexInMountainArray(arr);
console.log(result, expected, result === expected);

var arr = [0, 1, 5, 8, 3, 2];
var expected = 3;
var result = peakIndexInMountainArray(arr);
console.log(result, expected, result === expected);

var arr = [0, 10, 5, 4, 3, 2];
var expected = 1;
var result = peakIndexInMountainArray(arr);
console.log(result, expected, result === expected);
