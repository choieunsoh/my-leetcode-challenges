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
  let score = (1 << (cols - 1)) * rows;
  for (let col = 1; col < cols; col++) {
    let countSameBitAsFirstColumn = 0;
    for (let row = 0; row < rows; row++) {
      if (grid[row][0] === grid[row][col]) {
        countSameBitAsFirstColumn++;
      }
    }

    countSameBitAsFirstColumn = Math.max(countSameBitAsFirstColumn, rows - countSameBitAsFirstColumn);
    const columnScore = countSameBitAsFirstColumn * (1 << (cols - col - 1));
    score += columnScore;
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
