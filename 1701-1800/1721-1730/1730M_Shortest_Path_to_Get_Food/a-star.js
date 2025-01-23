// 1730. Shortest Path to Get Food
// https://leetcode.com/problems/shortest-path-to-get-food/description/
// T.C.: O((m*n)^2)
// S.C.: O(m*n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function (grid) {
  const dirs = [0, 1, 0, -1, 0];
  const rows = grid.length;
  const cols = grid[0].length;
  let [startRow, startCol] = [-1, -1];
  const foods = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === '*') {
        [startRow, startCol] = [row, col];
      } else if (grid[row][col] === '#') {
        foods.push([row, col]);
      }
    }
  }

  const seen = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const pq = new MinPriorityQueue({ priority: (x) => x[0] });
  const initDist = calcDist(startRow, startCol);
  pq.enqueue([initDist, 0, startRow, startCol]);

  while (!pq.isEmpty()) {
    const [, steps, row, col] = pq.dequeue().element;
    for (let d = 0; d < 4; d++) {
      const newRow = row + dirs[d];
      const newCol = col + dirs[d + 1];
      if (!isValid(newRow, newCol)) continue;

      if (grid[newRow][newCol] === '#') return steps + 1;

      seen[newRow][newCol] = true;
      const newDist = calcDist(newRow, newCol);
      pq.enqueue([newDist, steps + 1, newRow, newCol]);
    }
  }

  return -1;

  function calcDist(row, col) {
    let minDist = Number.MAX_SAFE_INTEGER;
    for (const food of foods) {
      const dist = Math.abs(food[0] - row) + Math.abs(food[1] - col);
      minDist = Math.min(minDist, dist);
    }
    return minDist;
  }

  function isValid(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] !== 'X' && !seen[row][col];
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
