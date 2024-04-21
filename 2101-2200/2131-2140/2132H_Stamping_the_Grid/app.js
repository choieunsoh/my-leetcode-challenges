// 2132. Stamping the Grid
// https://leetcode.com/problems/stamping-the-grid/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number[][]} grid
 * @param {number} stampHeight
 * @param {number} stampWidth
 * @return {boolean}
 */
var possibleToStamp = function (grid, stampHeight, stampWidth) {
  const m = grid.length;
  const n = grid[0].length;
  const stamp = Array.from({ length: m }, () => new Array(n).fill(0));
  const occupied = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) occupied.add(i * n + j);

      const left = i > 0 ? grid[i - 1][j] : 0;
      const top = j > 0 ? grid[i][j - 1] : 0;
      const topLeft = i > 0 && j > 0 ? grid[i - 1][j - 1] : 0;
      grid[i][j] += left + top - topLeft;
    }
  }

  for (let i = 0; i + stampHeight <= m; i++) {
    for (let j = 0; j + stampWidth <= n; j++) {
      const top = i > 0 ? grid[i - 1][j + stampWidth - 1] : 0;
      const left = j > 0 ? grid[i + stampHeight - 1][j - 1] : 0;
      const topLeft = i > 0 && j > 0 ? grid[i - 1][j - 1] : 0;
      if (grid[i + stampHeight - 1][j + stampWidth - 1] === left + top - topLeft) {
        stamp[i][j] = 1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const left = i > 0 ? stamp[i - 1][j] : 0;
      const top = j > 0 ? stamp[i][j - 1] : 0;
      const topLeft = i > 0 && j > 0 ? stamp[i - 1][j - 1] : 0;
      stamp[i][j] += left + top - topLeft;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (occupied.has(i * n + j)) continue;

      const left = j >= stampWidth ? stamp[i][j - stampWidth] : 0;
      const top = i >= stampHeight ? stamp[i - stampHeight][j] : 0;
      const topLeft = i >= stampHeight && j >= stampWidth ? stamp[i - stampHeight][j - stampWidth] : 0;
      if (stamp[i][j] === 0 + left + top - topLeft) return false;
    }
  }

  return true;
};

var grid = [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  stampHeight = 4,
  stampWidth = 3;
var expected = true;
var result = possibleToStamp(grid, stampHeight, stampWidth);
console.log(result, result === expected);

var grid = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ],
  stampHeight = 2,
  stampWidth = 2;
var expected = false;
var result = possibleToStamp(grid, stampHeight, stampWidth);
console.log(result, result === expected);
