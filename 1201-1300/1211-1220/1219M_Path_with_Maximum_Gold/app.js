// 1219. Path with Maximum Gold
// https://leetcode.com/problems/path-with-maximum-gold/description/
// T.C.: O(m*n * 4^g)
// S.C.: O(4^g)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let result = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  let totalGold = 0;
  let goldSlots = 0;
  let visitAllSlots = false;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] > 0) {
        totalGold += grid[row][col];
        goldSlots++;
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] > 0) {
        const gold = dfs(row, col, 0);
        if (gold === totalGold) return gold;

        result = Math.max(result, gold);
      }
    }
  }
  return result;

  function dfs(row, col, visitCount) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] == 0) return 0;
    if (visitAllSlots) return 0;

    if (visitCount === goldSlots) {
      visitAllSlots = true;
      return 0;
    }

    const currentGold = grid[row][col];
    grid[row][col] = 0;
    visitCount++;

    const topGold = dfs(row - 1, col, visitCount);
    const bottomGold = dfs(row + 1, col, visitCount);
    const leftGold = dfs(row, col - 1, visitCount);
    const rightGold = dfs(row, col + 1, visitCount);
    const maxCollectedGold = currentGold + Math.max(topGold, bottomGold, leftGold, rightGold);

    grid[row][col] = currentGold;
    return maxCollectedGold;
  }
};

var grid = [
  [0, 6, 0],
  [5, 8, 7],
  [0, 9, 0],
];
var expected = 24;
var result = getMaximumGold(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 7],
  [2, 0, 6],
  [3, 4, 5],
  [0, 3, 0],
  [9, 0, 20],
];
var expected = 28;
var result = getMaximumGold(grid);
console.log(result, result === expected);
