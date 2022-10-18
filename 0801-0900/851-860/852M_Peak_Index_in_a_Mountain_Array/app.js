// 852. Peak Index in a Mountain Array
// https://seanprashad.com/leetcode-patterns/
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  if (arr.length === 3) return 1;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
    if (arr[mid] < arr[mid + 1]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return left;
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
