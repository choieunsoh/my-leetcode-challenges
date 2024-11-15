// 1574. Shortest Subarray to be Removed to Make Array Sorted
// https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  const n = arr.length;
  let right = n - 1;
  while (right > 0 && arr[right] >= arr[right - 1]) {
    right--;
  }

  let length = right;
  let left = 0;
  while (left < right && (left === 0 || arr[left - 1] <= arr[left])) {
    while (right < n && arr[left] > arr[right]) {
      right++;
    }
    length = Math.min(length, right - left - 1);
    left++;
  }
  return length;
};

var arr = [1, 2, 3, 10, 4, 2, 3, 5];
var expected = 3;
var result = findLengthOfShortestSubarray(arr);
console.log(result, result === expected);

var arr = [5, 4, 3, 2, 1];
var expected = 4;
var result = findLengthOfShortestSubarray(arr);
console.log(result, result === expected);

var arr = [5, 6, 3, 2, 4, 7, 9];
var expected = 3;
var result = findLengthOfShortestSubarray(arr);
console.log(result, result === expected);

var arr = [4, 2, 1, 2, 4];
var expected = 2;
var result = findLengthOfShortestSubarray(arr);
console.log(result, result === expected);

var arr = [1, 2, 4];
var expected = 0;
var result = findLengthOfShortestSubarray(arr);
console.log(result, result === expected);

var arr = [13, 0, 14, 7, 18, 18, 18, 16, 8, 15, 20];
var expected = 8;
var result = findLengthOfShortestSubarray(arr);
console.log(result, result === expected);
