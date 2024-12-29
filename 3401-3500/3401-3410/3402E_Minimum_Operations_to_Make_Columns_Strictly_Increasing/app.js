// 3402. Minimum Operations to Make Columns Strictly Increasing
// https://leetcode.com/problems/minimum-operations-to-make-columns-strictly-increasing/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid) {
  let result = 0;
  for (let col = 0; col < grid[0].length; col++) {
    let prev = grid[0][col];
    for (let row = 1; row < grid.length; row++) {
      const curr = grid[row][col];
      if (curr <= prev) {
        result += prev + 1 - curr;
        prev++;
      } else {
        prev = curr;
      }
    }
  }
  return result;
};

var grid = [
  [3, 2],
  [1, 3],
  [3, 4],
  [0, 1],
];
var expected = 15;
var result = minimumOperations(grid);
console.log(result, result === expected);

var grid = [
  [3, 2, 1],
  [2, 1, 0],
  [1, 2, 3],
];
var expected = 12;
var result = minimumOperations(grid);
console.log(result, result === expected);
