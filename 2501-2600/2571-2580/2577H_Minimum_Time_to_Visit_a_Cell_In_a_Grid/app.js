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
  if (grid[0][1] > 1 && grid[1][0] > 1) return -1;

  const rows = grid.length;
  const cols = grid[0].length;
  const MAX = Number.MAX_SAFE_INTEGER;
  const dir = [-1, 0, 1, 0, -1];
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(MAX));
  visited[0][0] = 0;

  const pq = new MinPriorityQueue({ priority: (a) => a[0] });
  pq.enqueue([0, 0, 0]);

  while (!pq.isEmpty()) {
    const [time, row, col] = pq.dequeue().element;
    if (row === rows - 1 && col === cols - 1) return time;

    for (let k = 0; k < 4; k++) {
      const newRow = row + dir[k];
      const newCol = col + dir[k + 1];
      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || time + 1 >= visited[newRow][newCol]) continue;

      let newTime = 0;
      const nextTime = grid[newRow][newCol];
      const diff = nextTime - time;
      if (time + 1 > nextTime) {
        newTime = time + 1;
      } else if (diff & 1) {
        newTime = nextTime;
      } else {
        newTime = nextTime + 1;
      }

      pq.enqueue([newTime, newRow, newCol]);
      visited[newRow][newCol] = newTime;
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
