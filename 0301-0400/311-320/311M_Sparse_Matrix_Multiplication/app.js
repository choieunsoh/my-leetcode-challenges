// 311. Sparse Matrix Multiplication
// https://leetcode.com/problems/sparse-matrix-multiplication/description/
// T.C.: O(m * k * n)
// S.C.: O(1)
/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function (mat1, mat2) {
  const result = Array.from({ length: mat1.length }, () => new Array(mat2[0].length).fill(0));
  for (let mat1Row = 0; mat1Row < mat1.length; mat1Row++) {
    for (let mat1Col = 0; mat1Col < mat1[0].length; mat1Col++) {
      if (mat1[mat1Row][mat1Col] === 0) continue;
      for (let mat2Col = 0; mat2Col < mat2[0].length; mat2Col++) {
        result[mat1Row][mat2Col] += mat1[mat1Row][mat1Col] * mat2[mat1Col][mat2Col];
      }
    }
  }
  return result;
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
