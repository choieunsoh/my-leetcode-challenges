// 2371. Minimize Maximum Value in a Grid
// https://leetcode.com/problems/minimize-maximum-value-in-a-grid/description/
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
// T.C.: O((m*n) log (m*n))
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var minScore = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const rows = new Array(m).fill(1);
  const cols = new Array(n).fill(1);
  const pq = new MinPriorityQueue({
    priority: (x) => x.val,
  });

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      pq.enqueue({ val: grid[i][j], row: i, col: j });
    }
  }

  while (!pq.isEmpty()) {
    const { row, col } = pq.dequeue().element;
    const max = Math.max(rows[row], cols[col]);
    grid[row][col] = max;
    rows[row] = max + 1;
    cols[col] = max + 1;
  }

  return grid;
};

var grid = [
  [3, 1],
  [2, 5],
];
var expected = [
  [2, 1],
  [1, 2],
];
var result = minScore(grid);
console.log(result, result.join() === expected.join());

var grid = [[10]];
var expected = [[1]];
var result = minScore(grid);
console.log(result, result.join() === expected.join());

var grid = [
  [3, 1, 9, 4],
  [2, 5, 10, 12],
];
var expected = [
  [2, 1, 4, 3],
  [1, 2, 5, 6],
];
var result = minScore(grid);
console.log(result, result.join() === expected.join());
