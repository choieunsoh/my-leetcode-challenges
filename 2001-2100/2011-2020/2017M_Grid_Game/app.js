// 2017. Grid Game
// https://leetcode.com/problems/grid-game/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  const n = grid[0].length;
  let firstRowScore = grid[0].reduce((a, b) => a + b, 0);
  let bestSecondRobotScore = Number.MAX_SAFE_INTEGER;
  let secondRowScore = 0;
  for (let i = 0; i < n; i++) {
    firstRowScore -= grid[0][i];
    if (i > 0) secondRowScore += grid[1][i - 1];
    const secondRobotScore = Math.max(firstRowScore, secondRowScore);
    bestSecondRobotScore = Math.min(bestSecondRobotScore, secondRobotScore);
  }
  return bestSecondRobotScore;
};

var grid = [
  [2, 5, 4],
  [1, 5, 1],
];
var expected = 4;
var result = gridGame(grid);
console.log(result, result === expected);

var grid = [
  [3, 3, 1],
  [8, 5, 2],
];
var expected = 4;
var result = gridGame(grid);
console.log(result, result === expected);

var grid = [
  [1, 3, 1, 15],
  [1, 3, 3, 1],
];
var expected = 7;
var result = gridGame(grid);
console.log(result, result === expected);
