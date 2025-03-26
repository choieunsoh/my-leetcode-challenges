// 2033. Minimum Operations to Make a Uni-Value Grid
// https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/description/
// T.C.: O(nm log(nm))
// S.C.: O(mn)
/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  const matrix = grid.flat().sort((a, b) => a - b);
  const n = matrix.length;
  const median = matrix[n >> 1];
  const medianRemainder = median % x;

  let count = 0;
  for (const num of matrix) {
    if (num % x !== medianRemainder) return -1;
    count += Math.abs(num - median) / x;
  }
  return count;
};

var grid = [
    [2, 4],
    [6, 8],
  ],
  x = 2;
var expected = 4;
var result = minOperations(grid, x);
console.log(result, result === expected);

var grid = [
    [1, 5],
    [2, 3],
  ],
  x = 1;
var expected = 5;
var result = minOperations(grid, x);
console.log(result, result === expected);

var grid = [
    [1, 2],
    [3, 4],
  ],
  x = 2;
var expected = -1;
var result = minOperations(grid, x);
console.log(result, result === expected);
