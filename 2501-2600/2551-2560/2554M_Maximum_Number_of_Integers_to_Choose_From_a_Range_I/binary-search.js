// 2554. Maximum Number of Integers to Choose From a Range I
// https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/description/
// T.C.: O((n+m) log m)
// S.C.: O(m)
/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
  banned.sort((a, b) => a - b);
  let count = 0;

  for (let num = 1; num <= n; num++) {
    if (binarySearch(banned, num)) continue;
    maxSum -= num;
    if (maxSum < 0) break;
    count++;
  }
  return count;

  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;

      if (arr[mid] === target) return true;

      if (arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
  }
};

var banned = [1, 6, 5],
  n = 5,
  maxSum = 6;
var expected = 2;
var result = maxCount(banned, n, maxSum);
console.log(result, result === expected);

var banned = [1, 2, 3, 4, 5, 6, 7],
  n = 8,
  maxSum = 1;
var expected = 0;
var result = maxCount(banned, n, maxSum);
console.log(result, result === expected);

var banned = [11],
  n = 7,
  maxSum = 50;
var expected = 7;
var result = maxCount(banned, n, maxSum);
console.log(result, result === expected);
