// 566. Reshape the Matrix
// https://leetcode.com/problems/reshape-the-matrix/
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;
  if (m * n !== r * c) return mat;

  const result = Array.from({ length: r }, () => Array(c).fill(0));
  for (let i = 0; i < m * n; i++) {
    const sr = Math.floor(i / n);
    const sc = i % n;
    const dr = Math.floor(i / c);
    const dc = i % c;
    result[dr][dc] = mat[sr][sc];
  }

  return result;
};

var mat = [
    [1, 2],
    [3, 4],
  ],
  r = 1,
  c = 4;
var expected = [[1, 2, 3, 4]];
var result = matrixReshape(mat, r, c);
console.log(result, result.join() === expected.join());

var mat = [
    [1, 2],
    [3, 4],
  ],
  r = 2,
  c = 4;
var expected = [
  [1, 2],
  [3, 4],
];
var result = matrixReshape(mat, r, c);
console.log(result, result.join() === expected.join());
