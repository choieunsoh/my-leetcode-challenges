// https://leetcode.com/problems/transpose-matrix/
// 867. Transpose Matrix
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const result = Array(matrix[0].length)
    .fill(0)
    .map(() => Array(matrix.length).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];
var actual = transpose(matrix);
console.log(
  actual.forEach((x) => console.log(x.join())),
  expected.forEach((x) => console.log(x.join())),
  expected.join() === actual.join()
);

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
var expected = [
  [1, 4],
  [2, 5],
  [3, 6],
];
var actual = transpose(matrix);
console.log(
  actual.forEach((x) => console.log(x.join())),
  expected.forEach((x) => console.log(x.join())),
  expected.join() === actual.join()
);
