// 1351. Count Negative Numbers in a Sorted Matrix
// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let result = 0;
  const rows = grid.length;
  const columns = grid[0].length;
  let r = rows - 1;
  let c = 0;
  while (r >= 0 && c < columns) {
    if (grid[r][c] < 0) {
      r--;
      result += columns - c;
    } else {
      c++;
    }
  }
  return result;
};

var grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
var expected = 8;
var result = countNegatives(grid);
console.log(result, result === expected);

var grid = [
  [3, 2],
  [1, 0],
];
var expected = 0;
var result = countNegatives(grid);
console.log(result, result === expected);
