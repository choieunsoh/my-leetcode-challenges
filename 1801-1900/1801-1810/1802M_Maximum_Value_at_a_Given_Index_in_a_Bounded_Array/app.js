// 1802. Maximum Value at a Given Index in a Bounded Array
// https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/
/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  let result = 0;
  let left = 0;
  let right = maxSum;
  while (left <= right) {
    const mid = (left + right + 1) >> 1;
    if (!isValid(mid)) {
      right = mid - 1;
    } else {
      result = mid;
      left = mid + 1;
    }
  }
  return result;

  function isValid(mid) {
    const leftLength = index + 1;
    const rightLength = n - index;
    const curSum = getSum(leftLength, mid) + getSum(rightLength, mid) - mid;
    return curSum <= maxSum;
  }

  function getSum(length, value) {
    let sum = 0;
    if (length <= value) {
      sum = ((2 * value - length + 1) * length) / 2;
    } else {
      sum = ((1 + value) * value) / 2 + length - value;
    }
    return sum;
  }
};

var n = 4,
  index = 2,
  maxSum = 6;
var expected = 2;
var result = maxValue(n, index, maxSum);
console.log(result, result === expected);

var n = 6,
  index = 1,
  maxSum = 10;
var expected = 3;
var result = maxValue(n, index, maxSum);
console.log(result, result === expected);
