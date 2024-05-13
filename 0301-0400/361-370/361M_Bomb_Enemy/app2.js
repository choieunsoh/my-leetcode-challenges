// 361. Bomb Enemy
// https://leetcode.com/problems/bomb-enemy/description/
// T.C.: O(n * m * (m + n))
// S.C.: O(1)
/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let result = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === '0') {
        const hits = getHits(row, col);
        result = Math.max(result, hits);
      }
    }
  }
  return result;

  function getHits(row, col) {
    let hits = 0;

    for (let c = col - 1; c >= 0; c--) {
      if (grid[row][c] === 'W') break;
      if (grid[row][c] === 'E') hits++;
    }

    for (let c = col + 1; c < cols; c++) {
      if (grid[row][c] === 'W') break;
      if (grid[row][c] === 'E') hits++;
    }

    for (let r = row - 1; r >= 0; r--) {
      if (grid[r][col] === 'W') break;
      if (grid[r][col] === 'E') hits++;
    }

    for (let r = row + 1; r < rows; r++) {
      if (grid[r][col] === 'W') break;
      if (grid[r][col] === 'E') hits++;
    }

    return hits;
  }
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
