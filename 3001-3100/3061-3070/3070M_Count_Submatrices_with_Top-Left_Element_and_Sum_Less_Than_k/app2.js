// 3070. Count Submatrices with Top-Left Element and Sum Less Than k
// https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/description/
// T.C.: O(n*m)
// S.C.: O(m)
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function (grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  const prefixSum = new Array(cols).fill(0);
  let count = 0;

  for (let i = 0; i < rows; i++) {
    let sum = 0;
    for (let j = 0; j < cols; j++) {
      prefixSum[j] += grid[i][j];
      sum += prefixSum[j];
      if (sum <= k) {
        count++;
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
