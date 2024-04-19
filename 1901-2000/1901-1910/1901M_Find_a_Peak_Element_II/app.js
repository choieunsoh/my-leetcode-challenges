// 1901. Find a Peak Element II
// https://leetcode.com/problems/find-a-peak-element-ii/description/
// T.C.: O(n log m)
// S.C.: O(1)
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  let start = 0;
  let end = mat[0].length - 1;
  while (start <= end) {
    const mid = (start + end) >> 1;
    const peakRow = findPeakRow(mid);

    let left = mid;
    let right = mid;
    if (mid - 1 >= 0) left = mat[peakRow][mid - 1];
    if (mid + 1 < mat[0].length) right = mat[peakRow][mid + 1];

    if (mat[peakRow][mid] > left && mat[peakRow][mid] > right) {
      return [peakRow, mid];
    }
    if (mat[peakRow][mid] < left) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return [-1, -1];

  function findPeakRow(mid) {
    let peak = -1;
    let peakRow = -1;
    for (let row = 0; row < mat.length; row++) {
      if (mat[row][mid] > peak) {
        peak = mat[row][mid];
        peakRow = row;
      }
    }
    return peakRow;
  }
};

var mat = [
  [1, 4],
  [3, 2],
];
var expected = [1, 0];
var result = findPeakGrid(mat);
console.log(result, result.join() === expected.join());

var mat = [
  [10, 20, 15],
  [21, 30, 14],
  [7, 16, 32],
];
var expected = [1, 1];
var result = findPeakGrid(mat);
console.log(result, result.join() === expected.join());
