// 2022. Convert 1D Array Into 2D Array
// https://leetcode.com/problems/convert-1d-array-into-2d-array/
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) return [];
  const matrix = Array(m)
    .fill(0)
    .map(() => Array(n));
  let index = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = original[index++];
    }
  }
  return matrix;
};

var original = [1, 2, 3, 4],
  m = 2,
  n = 2;
var expected = [
  [1, 2],
  [3, 4],
];
var result = construct2DArray(original, m, n);
console.log(result, result.join() === expected.join());

var original = [1, 2, 3],
  m = 1,
  n = 3;
var expected = [[1, 2, 3]];
var result = construct2DArray(original, m, n);
console.log(result, result.join() === expected.join());

var original = [1, 2],
  m = 1,
  n = 1;
var expected = [];
var result = construct2DArray(original, m, n);
console.log(result, result.join() === expected.join());

var original = [1, 1, 1, 1],
  m = 4,
  n = 1;
var expected = [[1], [1], [1], [1]];
var result = construct2DArray(original, m, n);
console.log(result, result.join() === expected.join());
