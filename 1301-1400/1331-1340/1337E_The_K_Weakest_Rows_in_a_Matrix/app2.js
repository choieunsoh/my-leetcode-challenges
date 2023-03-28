// 1337. The K Weakest Rows in a Matrix
// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const map = new Map();
  for (let i = 0; i < mat.length; i++) {
    const sum = mat[i].reduce((a, b) => a + b, 0);
    map.set(i, sum);
  }
  return [...map.keys()].sort((a, b) => map.get(a) - map.get(b)).slice(0, k);
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
