// 845. Longest Mountain in Array
// https://leetcode.com/problems/longest-mountain-in-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  const n = arr.length;
  let result = 0;
  let left = 0;
  let foundPeak = false;
  for (let right = 1; right < n; right++) {
    if (!foundPeak && arr[right] <= arr[right - 1]) {
      left = right;
    }

    if (arr[right] > arr[right - 1] && arr[right] > arr[right + 1]) {
      foundPeak = true;
      continue;
    }

    if (foundPeak && (right + 1 === n || arr[right] <= arr[right + 1])) {
      result = Math.max(result, right - left + 1);
      left = right;
      foundPeak = false;
    }
  }
  return result;
};

var arr = [2, 1, 4, 7, 3, 2, 5];
var expected = 5;
var result = longestMountain(arr);
console.log(result, result === expected);

var arr = [2, 2, 2];
var expected = 0;
var result = longestMountain(arr);
console.log(result, result === expected);

var arr = [2, 2, 2, 4, 3];
var expected = 3;
var result = longestMountain(arr);
console.log(result, result === expected);

var arr = [2, 2, 2, 4, 3, 4, 5, 2, 1];
var expected = 5;
var result = longestMountain(arr);
console.log(result, result === expected);

var arr = [1, 2, 3];
var expected = 0;
var result = longestMountain(arr);
console.log(result, result === expected);

var arr = [3, 2, 1];
var expected = 0;
var result = longestMountain(arr);
console.log(result, result === expected);

var arr = [2, 2, 2, 4, 3, 4, 5, 2, 2, 2];
var expected = 4;
var result = longestMountain(arr);
console.log(result, result === expected);

var arr = [2, 2, 2, 4, 3, 4, 5, 2, 2, 2, 3, 1];
var expected = 4;
var result = longestMountain(arr);
console.log(result, result === expected);

var arr = [3];
var expected = 0;
var result = longestMountain(arr);
console.log(result, result === expected);

var arr = [3, 2];
var expected = 0;
var result = longestMountain(arr);
console.log(result, result === expected);
