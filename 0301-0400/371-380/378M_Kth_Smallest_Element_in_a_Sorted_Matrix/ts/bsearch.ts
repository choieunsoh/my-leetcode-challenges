// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
// 378. Kth Smallest Element in a Sorted Matrix
var kthSmallest = function (matrix: number[][], k: number): number {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let left = matrix[0][0];
  let right = matrix[rows - 1][cols - 1];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const [count, lower, upper] = countSmallerThanMid(mid, left, right);
    if (count === k) return lower;
    count < k ? (left = upper) : (right = lower);
  }
  return left;

  function countSmallerThanMid(
    mid: number,
    left: number,
    right: number
  ): number[] {
    // Start Top Right Corner
    let count = 0;
    let row = 0;
    let col = cols - 1;
    while (row < rows && col >= 0) {
      if (matrix[row][col] > mid) {
        right = Math.min(right, matrix[row][col]);
        col--;
      } else {
        left = Math.max(left, matrix[row][col]);
        count += col + 1;
        row++;
      }
    }
    return [count, left, right];
  }
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
