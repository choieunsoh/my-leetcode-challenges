// 1975. Maximum Matrix Sum
// https://leetcode.com/problems/maximum-matrix-sum/description/
// T.C.: O(m*n)
// S.C.: O(1)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
  let minAbsValue = Number.MAX_SAFE_INTEGER;
  let sumAbsValue = 0;
  let negativeCount = 0;
  for (const row of matrix) {
    for (const num of row) {
      sumAbsValue += Math.abs(num);
      minAbsValue = Math.min(minAbsValue, Math.abs(num));
      if (num < 0) negativeCount++;
    }
  }

  if (negativeCount % 2 !== 0) {
    sumAbsValue -= minAbsValue * 2;
  }
  return sumAbsValue;
};

var matrix = [
  [1, -1],
  [-1, 1],
];
var expected = 4;
var result = maxMatrixSum(matrix);
console.log(result, result === expected);

var matrix = [
  [1, 2, 3],
  [-1, -2, -3],
  [1, 2, 3],
];
var expected = 16;
var result = maxMatrixSum(matrix);
console.log(result, result === expected);

var matrix = [
  [-1, 0, -1],
  [-2, 1, 3],
  [3, 2, 2],
];
var expected = 13;
var result = maxMatrixSum(matrix);
console.log(result, result === expected);

var matrix = [
  [-1, 0, -1],
  [2, 1, 3],
  [-3, 2, 2],
];
var expected = 13;
var result = maxMatrixSum(matrix);
console.log(result, result === expected);
