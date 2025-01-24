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
  // Map to store the index of each number in the arr
  const numToIndex = new Map();
  for (let i = 0; i < arr.length; i++) {
    numToIndex.set(arr[i], i);
  }

  let result = Infinity;
  const numRows = mat.length;
  const numCols = mat[0].length;

  // Check for the earliest row to be completely painted
  for (let row = 0; row < numRows; row++) {
    // Tracks the greatest index in this row
    let lastElementIndex = -Infinity;
    for (let col = 0; col < numCols; col++) {
      const indexVal = numToIndex.get(mat[row][col]);
      lastElementIndex = Math.max(lastElementIndex, indexVal);
    }
    // Update result with the minimum index where this row is fully painted
    result = Math.min(result, lastElementIndex);
  }

  // Check for the earliest column to be completely painted
  for (let col = 0; col < numCols; col++) {
    let lastElementIndex = -Infinity;
    for (let row = 0; row < numRows; row++) {
      const indexVal = numToIndex.get(mat[row][col]);
      lastElementIndex = Math.max(lastElementIndex, indexVal);
    }
    // Update result with the minimum index where this column is fully painted
    result = Math.min(result, lastElementIndex);
  }

  return result;
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
