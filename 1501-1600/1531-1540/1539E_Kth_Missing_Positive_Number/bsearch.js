// 1539. Kth Missing Positive Number
// https://leetcode.com/problems/kth-missing-positive-number/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const currentValue = arr[mid];
    const expectedValue = mid + 1;
    const missing = currentValue - expectedValue;
    if (missing < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left + k;
};

var arr = [2, 3, 4, 7, 11],
  k = 5;
var expected = 9;
var result = findKthPositive(arr, k);
console.log(result, result === expected);

var arr = [1, 2, 3, 4],
  k = 2;
var expected = 6;
var result = findKthPositive(arr, k);
console.log(result, result === expected);
