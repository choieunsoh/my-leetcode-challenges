// 861. Score After Flipping Matrix
// https://leetcode.com/problems/score-after-flipping-matrix/description/
// T.C.: O(m * n)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  for (let row = 0; row < rows; row++) {
    if (grid[row][0] === 0) {
      for (let col = 0; col < cols; col++) {
        grid[row][col] = 1 - grid[row][col];
      }
    }
  }

  for (let col = 1; col < cols; col++) {
    let countZeros = 0;
    for (let row = 0; row < rows; row++) {
      if (grid[row][col] === 0) countZeros++;
    }
    if (countZeros > rows - countZeros) {
      for (let row = 0; row < rows; row++) {
        grid[row][col] = 1 - grid[row][col];
      }
    }
  }

  let score = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      score += grid[row][col] * (1 << (cols - col - 1));
    }
  }

  return score;
};

var grid = [
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0],
];
var expected = 39;
var result = matrixScore(grid);
console.log(result, result === expected);

var grid = [[0]];
var expected = 1;
var result = matrixScore(grid);
console.log(result, result === expected);
