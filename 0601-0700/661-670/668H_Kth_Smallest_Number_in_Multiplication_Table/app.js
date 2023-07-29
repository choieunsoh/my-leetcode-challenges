// 668. Kth Smallest Number in Multiplication Table
// https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  let left = 1;
  let right = m * n;
  let result = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const count = countNumber(mid);
    if (count >= k) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;

  function countNumber(mid) {
    let count = 0;
    for (let i = 1; i <= m; i++) {
      count += Math.min(Math.floor(mid / i), n);
    }
    return count;
  }
};

var m = 3,
  n = 3,
  k = 5;
var expected = 3;
var result = findKthNumber(m, n, k);
console.log(result, result === expected);

var m = 2,
  n = 3,
  k = 6;
var expected = 6;
var result = findKthNumber(m, n, k);
console.log(result, result === expected);
