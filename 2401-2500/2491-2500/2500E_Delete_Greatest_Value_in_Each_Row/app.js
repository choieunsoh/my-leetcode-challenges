// 2500. Delete Greatest Value in Each Row
// https://leetcode.com/problems/delete-greatest-value-in-each-row/
// T.C.: O(m*n log n)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let score = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  for (let row = 0; row < rows; row++) {
    grid[row].sort((a, b) => b - a);
  }
  for (let col = 0; col < cols; col++) {
    let max = 0;
    for (let row = 0; row < rows; row++) {
      max = Math.max(max, grid[row][col]);
    }
    score += max;
  }
  return score;
};

var grid = [
  [1, 2, 4],
  [3, 3, 1],
];
var expected = 8;
var result = deleteGreatestValue(grid);
console.log(result, result === expected);

var grid = [[10]];
var expected = 10;
var result = deleteGreatestValue(grid);
console.log(result, result === expected);
