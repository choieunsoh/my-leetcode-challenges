// 2661. First Completely Painted Row or Column
// https://leetcode.com/problems/first-completely-painted-row-or-column/description/
// T.C.: O(m*n*(m+n))
// S.C.: O(m*n)
/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  const numRows = mat.length;
  const numCols = mat[0].length;
  const numToPos = new Map();

  // Populate the numToPos map by iterating over the matrix
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const value = mat[row][col];
      numToPos.set(value, [row, col]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const [row, col] = numToPos.get(num);
    mat[row][col] = -mat[row][col]; // mark as seen

    // Check if the row or column is completely painted
    if (checkRow(row, mat) || checkColumn(col, mat)) {
      return i;
    }
  }

  return -1; // This line will never be reached as per the problem statement

  function checkRow(row, mat) {
    // Return true if row is completely seen
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] > 0) {
        return false;
      }
    }
    return true;
  }

  function checkColumn(col, mat) {
    // Return true if col is completely seen
    for (let row = 0; row < mat.length; row++) {
      if (mat[row][col] > 0) {
        return false;
      }
    }
    return true;
  }
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
