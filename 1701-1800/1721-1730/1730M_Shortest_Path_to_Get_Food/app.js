// 1730. Shortest Path to Get Food
// https://leetcode.com/problems/shortest-path-to-get-food/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const [row, col] = findStartingPoint();
  return bfs(row, col);

  function findStartingPoint() {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === '*') {
          return [row, col];
        }
      }
    }
  }

  function bfs(startRow, startCol) {
    const dirs = [0, 1, 0, -1, 0];
    let queue = [[startRow, startCol]];
    let steps = 1;
    while (queue.length) {
      const newQueue = [];
      for (const [row, col] of queue) {
        for (let d = 0; d < 4; d++) {
          const newRow = row + dirs[d];
          const newCol = col + dirs[d + 1];
          if (!isValid(newRow, newCol)) continue;

          if (grid[newRow][newCol] === '#') return steps;
          grid[newRow][newCol] = steps.toString();
          newQueue.push([newRow, newCol]);
        }
      }
      queue = newQueue;
      steps++;
    }
    return -1;
  }

  function isValid(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols && 'O#'.includes(grid[row][col]);
  }
};

var grid = [
  ['X', 'X', 'X', 'X', 'X', 'X'],
  ['X', '*', 'O', 'O', 'O', 'X'],
  ['X', 'O', 'O', '#', 'O', 'X'],
  ['X', 'X', 'X', 'X', 'X', 'X'],
];
var expected = 3;
var result = getFood(grid);
console.log(result, result === expected);

var grid = [
  ['X', 'X', 'X', 'X', 'X'],
  ['X', '*', 'X', 'O', 'X'],
  ['X', 'O', 'X', '#', 'X'],
  ['X', 'X', 'X', 'X', 'X'],
];
var expected = -1;
var result = getFood(grid);
console.log(result, result === expected);

var grid = [
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', '*', 'O', 'X', 'O', '#', 'O', 'X'],
  ['X', 'O', 'O', 'X', 'O', 'O', 'X', 'X'],
  ['X', 'O', 'O', 'O', 'O', '#', 'O', 'X'],
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
];
var expected = 6;
var result = getFood(grid);
console.log(result, result === expected);
