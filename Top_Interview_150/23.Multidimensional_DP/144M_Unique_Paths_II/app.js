// 63. Unique Paths II
// https://leetcode.com/problems/unique-paths-ii/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[rows - 1][cols - 1] === 1) return 0;

  let prevRow = new Array(cols).fill(0);
  prevRow[cols - 1] = 1;
  for (let row = rows - 1; row >= 0; row--) {
    const currentRow = new Array(cols).fill(0);
    for (let col = cols - 1; col >= 0; col--) {
      if (obstacleGrid[row][col] === 1) continue;
      currentRow[col] = prevRow[col] + (currentRow[col + 1] ?? 0);
    }
    prevRow = currentRow;
  }
  return prevRow[0];
};

var obstacleGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
var expected = 2;
var result = uniquePathsWithObstacles(obstacleGrid);
console.log(result, result === expected);

var obstacleGrid = [
  [0, 1],
  [0, 0],
];
var expected = 1;
var result = uniquePathsWithObstacles(obstacleGrid);
console.log(result, result === expected);

var obstacleGrid = [
  [0, 0],
  [0, 1],
];
var expected = 0;
var result = uniquePathsWithObstacles(obstacleGrid);
console.log(result, result === expected);

var obstacleGrid = [
  [0, 0],
  [1, 1],
  [0, 0],
];
var expected = 0;
var result = uniquePathsWithObstacles(obstacleGrid);
console.log(result, result === expected);
