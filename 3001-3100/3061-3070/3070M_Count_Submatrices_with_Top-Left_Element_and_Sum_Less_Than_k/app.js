// 3070. Count Submatrices with Top-Left Element and Sum Less Than k
// https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function (grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row > 0) {
        grid[row][col] += grid[row - 1][col];
      }
      if (col > 0) {
        grid[row][col] += grid[row][col - 1];
      }
      if (row > 0 && col > 0) {
        grid[row][col] -= grid[row - 1][col - 1];
      }
      if (grid[row][col] <= k) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};

var grid = [
    [7, 6, 3],
    [6, 6, 1],
  ],
  k = 18;
var expected = 4;
var result = countSubmatrices(grid, k);
console.log(result, result === expected);

var grid = [
    [7, 2, 9],
    [1, 5, 0],
    [2, 6, 6],
  ],
  k = 20;
var expected = 6;
var result = countSubmatrices(grid, k);
console.log(result, result === expected);
