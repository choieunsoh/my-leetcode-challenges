// findLongestSubarrayBySum
// LC-209. Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/
/**
 * @param {number} s
 * @param {number[]} arr
 * @return {number[]}
 */
function findLongestSubarrayBySum(s, arr) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minStart = 0;
  let maxLength = 0;
  while (right < arr.length) {
    sum += arr[right];
    while (sum > s) {
      sum -= arr[left++];
    }
    if (sum === s) {
      const newLength = right - left + 1;
      if (newLength > maxLength) {
        minStart = left;
        maxLength = newLength;
      }
    }
    right++;
  }

  if (maxLength === 0) return [-1];
  return [minStart + 1, minStart + maxLength];
}

var s = 12,
  arr = [1, 2, 3, 7, 5];
var expected = [2, 4];
var result = findLongestSubarrayBySum(s, arr);
console.log(result, result.join() === expected.join());

var s = 15,
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var expected = [1, 5];
var result = findLongestSubarrayBySum(s, arr);
console.log(result, result.join() === expected.join());

var s = 15,
  arr = [1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9, 10];
var expected = [1, 8];
var result = findLongestSubarrayBySum(s, arr);
console.log(result, result.join() === expected.join());

var s = 3,
  arr = [2];
var expected = [-1];
var result = findLongestSubarrayBySum(s, arr);
console.log(result, result.join() === expected.join());
