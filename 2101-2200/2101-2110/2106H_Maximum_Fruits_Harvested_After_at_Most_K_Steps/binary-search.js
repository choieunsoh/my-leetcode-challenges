// 2106. Maximum Fruits Harvested After at Most K Steps
// https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/description/
// T.C.: O(n + k log n)
// S.C.: O(k)
/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function (fruits, startPos, k) {
  const n = fruits.length;
  const sum = new Array(n + 1).fill(0);
  const indices = new Array(n).fill(0);
  sum[0] = 0;
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + fruits[i][1];
    indices[i] = fruits[i][0];
  }
  let ans = 0;
  for (let x = 0; x <= Math.floor(k / 2); x++) {
    /* move left x steps, then move right k - x steps. */
    let y = k - 2 * x;
    let left = startPos - x;
    let right = startPos + y;
    let start = lowerBound(indices, 0, n - 1, left);
    let end = upperBound(indices, 0, n - 1, right);
    ans = Math.max(ans, sum[end] - sum[start]);
    /* move right x steps, then move left k - x steps. */
    y = k - 2 * x;
    left = startPos - y;
    right = startPos + x;
    start = lowerBound(indices, 0, n - 1, left);
    end = upperBound(indices, 0, n - 1, right);
    ans = Math.max(ans, sum[end] - sum[start]);
  }
  return ans;

  function lowerBound(arr, left, right, val) {
    let result = right + 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] >= val) {
        result = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return result;
  }

  function upperBound(arr, left, right, val) {
    let result = right + 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] > val) {
        result = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return result;
  }
};

var fruits = [
    [2, 8],
    [6, 3],
    [8, 6],
  ],
  startPos = 5,
  k = 4;
var expected = 9;
var result = maxTotalFruits(fruits, startPos, k);
console.log(result, result === expected);

var fruits = [
    [0, 9],
    [4, 1],
    [5, 7],
    [6, 2],
    [7, 4],
    [10, 9],
  ],
  startPos = 5,
  k = 4;
var expected = 14;
var result = maxTotalFruits(fruits, startPos, k);
console.log(result, result === expected);

var fruits = [
    [0, 3],
    [6, 4],
    [8, 5],
  ],
  startPos = 3,
  k = 2;
var expected = 0;
var result = maxTotalFruits(fruits, startPos, k);
console.log(result, result === expected);
