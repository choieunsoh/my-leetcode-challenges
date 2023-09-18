// 1337. The K Weakest Rows in a Matrix
// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const rows = mat.length;
  const cols = mat[0].length;
  const result = new Set();
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const value = mat[row][col];
      if (value === 0) {
        result.add(row);
        if (result.size === k) {
          return [...result];
        }
      }
    }
  }
  for (let row = 0; row < k, result.size < k; row++) {
    result.add(row);
  }
  return [...result];
};

var mat = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  k = 3;
var expected = [2, 0, 3];
var result = kWeakestRows(mat, k);
console.log(result, result.join() === expected.join());

var mat = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  k = 2;
var expected = [0, 2];
var result = kWeakestRows(mat, k);
console.log(result, result.join() === expected.join());

var mat = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  k = 2;
var expected = [0, 1];
var result = kWeakestRows(mat, k);
console.log(result, result.join() === expected.join());

var mat = [
    [1, 1, 0],
    [1, 1, 0],
    [1, 1, 1],
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 1],
    [1, 0, 0],
  ],
  k = 6;
var expected = [4, 6, 0, 1, 2, 3];
var result = kWeakestRows(mat, k);
console.log(result, result.join() === expected.join());
