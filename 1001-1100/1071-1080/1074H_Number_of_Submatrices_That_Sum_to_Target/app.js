// 1074. Number of Submatrices That Sum to Target
// https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/description/
// T.C.: O(R^2 * C)
// S.C.: O(R * C)
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const ps = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      ps[row][col] = ps[row - 1][col] + ps[row][col - 1] - ps[row - 1][col - 1] + matrix[row - 1][col - 1];
    }
  }

  let result = 0;
  for (let row1 = 1; row1 <= rows; row1++) {
    for (let row2 = row1; row2 <= rows; row2++) {
      const map = new Map([[0, 1]]);
      for (let col = 1; col <= cols; col++) {
        const currSum = ps[row2][col] - ps[row1 - 1][col];
        result += map.get(currSum - target) ?? 0;

        const count = map.get(currSum) ?? 0;
        map.set(currSum, count + 1);
      }
    }
  }

  return result;
};

var matrix = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
  target = 0;
var expected = 4;
var result = numSubmatrixSumTarget(matrix, target);
console.log(result, result === expected);

var matrix = [
    [1, -1],
    [-1, 1],
  ],
  target = 0;
var expected = 5;
var result = numSubmatrixSumTarget(matrix, target);
console.log(result, result === expected);

var matrix = [[904]],
  target = 0;
var expected = 0;
var result = numSubmatrixSumTarget(matrix, target);
console.log(result, result === expected);
