// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
// 378. Kth Smallest Element in a Sorted Matrix
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  function countSmaller(matrix, target) {
    let total = 0;
    for (let i = 0; i < matrix.length; i++) {
      let count = 0;
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] <= target) {
          count++;
        }
      }
      if (count === 0) break;
      total += count;
    }
    return total;
  }

  const n = matrix.length;
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const count = countSmaller(matrix, mid);
    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

var matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  k = 8;
var expected = 13;
var actual = kthSmallest(matrix, k);
console.log(actual, actual === expected);

var matrix = [[-5]],
  k = 1;
var expected = -5;
var actual = kthSmallest(matrix, k);
console.log(actual, actual === expected);
