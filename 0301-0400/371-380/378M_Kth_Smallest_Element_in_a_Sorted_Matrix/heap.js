// 378. Kth Smallest Element in a Sorted Matrix
// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
// X = min(k, n)
// T.C.: O(X + k log X)
// S.C.: O(X)
const { MinHeap } = require('../../../_utils/heap');
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length;
  const heap = new MinHeap([], (a, b) => a[0] - b[0]);
  for (let row = 0; row < n; row++) {
    heap.push([matrix[row][0], row, 0]);
  }

  let result = heap.peek();
  while (k-- > 0) {
    result = heap.pop();
    const [, row, col] = result;
    if (col + 1 < n) {
      heap.push([matrix[row][col + 1], row, col + 1]);
    }
  }

  return result[0];
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
