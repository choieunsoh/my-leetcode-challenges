// 1970. Last Day Where You Can Still Cross
// https://leetcode.com/problems/last-day-where-you-can-still-cross/
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function (rows, cols, cells) {
  let result = 0;
  let left = 1;
  let right = cells.length;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const canCross = canCrossTheGrid(mid);
    if (canCross) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;

  function canCrossTheGrid(day) {
    const grid = Array.from({ length: rows }, () => new Array(cols).fill(1));
    for (let i = 0; i < day; i++) {
      const [row, col] = cells[i];
      grid[row - 1][col - 1] = 0;
    }

    let queue = [];
    for (let col = 0; col < cols; col++) {
      if (grid[0][col] === 0) continue;
      queue.push([0, col]);
      grid[0][col] = -1;
    }

    const dirs = [1, 0, -1, 0, 1];
    while (queue.length) {
      const nextQueue = [];
      for (const [row, col] of queue) {
        if (row === rows - 1) return true;
        for (let d = 0; d < 4; d++) {
          const nextRow = row + dirs[d];
          const nextCol = col + dirs[d + 1];
          if (!isValidCell(grid, nextRow, nextCol)) continue;
          nextQueue.push([nextRow, nextCol]);
          grid[nextRow][nextCol] = -1;
        }
      }
      queue = nextQueue;
    }
    return false;
  }

  function isValidCell(grid, row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== 1) return false;
    return true;
  }
};

var row = 2,
  col = 2,
  cells = [
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2],
  ];
var expected = 2;
var result = latestDayToCross(row, col, cells);
console.log(result, result === expected);

var row = 2,
  col = 2,
  cells = [
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 2],
  ];
var expected = 1;
var result = latestDayToCross(row, col, cells);
console.log(result, result === expected);

var row = 3,
  col = 3,
  cells = [
    [1, 2],
    [2, 1],
    [3, 3],
    [2, 2],
    [1, 1],
    [1, 3],
    [2, 3],
    [3, 2],
    [3, 1],
  ];
var expected = 3;
var result = latestDayToCross(row, col, cells);
console.log(result, result === expected);
