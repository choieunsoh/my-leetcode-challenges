// 2577. Minimum Time to Visit a Cell In a Grid
// https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/
// T.C.: O(m*n log m*n)
// S.C.: O(m*n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function (grid) {
  const MOVES = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  if (grid[0][1] > 1 && grid[1][0] > 1) {
    return -1;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const seen = Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));
  seen[0][0] = true;

  // MinHeap implementation
  const pq = new MinPriorityQueue({
    priority: (x) => x[0],
  });
  pq.enqueue([0, 0, 0]); // time, row, col

  while (!pq.isEmpty()) {
    const [time, row, col] = pq.dequeue().element;

    for (const [dr, dc] of MOVES) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || seen[newRow][newCol]) {
        continue;
      }

      let newTime = time + 1;
      if (grid[newRow][newCol] > newTime) {
        newTime += Math.floor((grid[newRow][newCol] - time) / 2) * 2;
      }

      if (newRow === rows - 1 && newCol === cols - 1) {
        return newTime;
      }

      seen[newRow][newCol] = true;
      pq.enqueue([newTime, newRow, newCol]);
    }
  }

  return -1;
};

var grid = [
  [0, 1, 3, 2],
  [5, 1, 2, 5],
  [4, 3, 8, 6],
];
var expected = 7;
var result = minimumTime(grid);
console.log(result, result == expected);

var grid = [
  [0, 2, 4],
  [3, 2, 1],
  [1, 0, 4],
];
var expected = -1;
var result = minimumTime(grid);
console.log(result, result == expected);
