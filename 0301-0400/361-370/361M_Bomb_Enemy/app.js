// 361. Bomb Enemy
// https://leetcode.com/problems/bomb-enemy/description/
// T.C.: O(n * m)
// S.C.: O(n)
/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let result = 0;
  let rowHits = 0;
  const colsHits = new Array(cols).fill(0);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (col === 0 || grid[row][col - 1] === 'W') {
        rowHits = 0;
        for (let c = col; c < cols; c++) {
          if (grid[row][c] === 'W') break;
          if (grid[row][c] === 'E') rowHits++;
        }
      }

      if (row === 0 || grid[row - 1][col] === 'W') {
        colsHits[col] = 0;
        for (let r = row; r < rows; r++) {
          if (grid[r][col] === 'W') break;
          if (grid[r][col] === 'E') colsHits[col]++;
        }
      }

      if (grid[row][col] === '0') {
        result = Math.max(result, rowHits + colsHits[col]);
      }
    }
  }
  return result;
};

var grid = [
  ['0', 'E', '0', '0'],
  ['E', '0', 'W', 'E'],
  ['0', 'E', '0', '0'],
];
var expected = 3;
var result = maxKilledEnemies(grid);
console.log(result, result === expected);

var grid = [
  ['W', 'W', 'W'],
  ['0', '0', '0'],
  ['E', 'E', 'E'],
];
var expected = 1;
var result = maxKilledEnemies(grid);
console.log(result, result === expected);
