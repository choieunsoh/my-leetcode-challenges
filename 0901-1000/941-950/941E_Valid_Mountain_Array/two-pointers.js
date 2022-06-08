// https://leetcode.com/problems/valid-mountain-array/
// 941. Valid Mountain Array
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start + 1] > arr[start]) {
      start++;
    } else if (arr[end - 1] > arr[end]) {
      end--;
    } else {
      break;
    }
  }
  return start == end && start != 0 && end != arr.length - 1;
};

var arr = [2, 1];
var expected = false;
console.log(validMountainArray(arr), expected);

var arr = [3, 5, 5];
var expected = false;
console.log(validMountainArray(arr), expected);

var arr = [0, 3, 2, 1];
var expected = true;
console.log(validMountainArray(arr), expected);

var arr = [5, 3, 2, 1];
var expected = false;
console.log(validMountainArray(arr), expected);

var arr = [1, 2, 3, 4];
var expected = false;
console.log(validMountainArray(arr), expected);

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var expected = false;
console.log(validMountainArray(arr), expected);

var arr = [0, 1, 2, 4, 2, 1];
var expected = true;
console.log(validMountainArray(arr), expected);
