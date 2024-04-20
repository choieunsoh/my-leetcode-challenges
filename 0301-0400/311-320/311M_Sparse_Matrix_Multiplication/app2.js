// 311. Sparse Matrix Multiplication
// https://leetcode.com/problems/sparse-matrix-multiplication/description/
// T.C.: O(m * k * n)
// S.C.: O(m * k + k * n)
/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function (mat1, mat2) {
  const map1 = compressMatrix(mat1);
  const map2 = compressMatrix(mat2);
  const result = Array.from({ length: mat1.length }, () => new Array(mat2[0].length).fill(0));
  for (let mat1Row = 0; mat1Row < mat1.length; mat1Row++) {
    for (const [mat1Col, mat1Val] of map1[mat1Row]) {
      for (const [mat2Col, mat2Val] of map2[mat1Col]) {
        result[mat1Row][mat2Col] = mat1Val * mat2Val;
      }
    }
  }
  return result;

  function compressMatrix(mat) {
    const map = [];
    for (let row = 0; row < mat.length; row++) {
      map[row] = [];
      for (let col = 0; col < mat[0].length; col++) {
        if (mat[row][col] !== 0) {
          map[row].push([col, mat[row][col]]);
        }
      }
    }
    return map;
  }
};

var mat1 = [
    [1, 0, 0],
    [-1, 0, 3],
  ],
  mat2 = [
    [7, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ];
var expected = [
  [7, 0, 0],
  [-7, 0, 3],
];
var result = multiply(mat1, mat2);
console.log(result, result.join() === expected.join());

var mat1 = [[0]],
  mat2 = [[0]];
var expected = [[0]];
var result = multiply(mat1, mat2);
console.log(result, result.join() === expected.join());
