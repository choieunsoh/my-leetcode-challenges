// 2661. First Completely Painted Row or Column
// https://leetcode.com/problems/first-completely-painted-row-or-column/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const rowCounts = new Array(cols).fill(0);
  const colCounts = new Array(rows).fill(0);
  const map = new Array(rows * cols + 1);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      map[mat[row][col]] = [row, col];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const [row, col] = map[arr[i]];
    rowCounts[col]++;
    colCounts[row]++;
    if (rowCounts[col] === rows || colCounts[row] === cols) {
      return i;
    }
  }
  return -1;
};

var arr = [1, 3, 4, 2],
  mat = [
    [1, 4],
    [2, 3],
  ];
var expected = 2;
var result = firstCompleteIndex(arr, mat);
console.log(result, result === expected);

var arr = [2, 8, 7, 4, 1, 3, 5, 6, 9],
  mat = [
    [3, 2, 5],
    [1, 4, 6],
    [8, 7, 9],
  ];
var expected = 3;
var result = firstCompleteIndex(arr, mat);
console.log(result, result === expected);
