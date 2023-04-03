// 63. Unique Paths II
// https://leetcode.com/problems/unique-paths-ii/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;

  let prevRow = Array(n).fill(0);
  prevRow[n - 1] = 1;
  for (let i = m - 1; i >= 0; i--) {
    const currentRow = Array(n).fill(0);
    for (let j = n - 1; j >= 0; j--) {
      if (obstacleGrid[i][j] === 1) continue;
      currentRow[j] = prevRow[j] + (currentRow[j + 1] ?? 0);
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
