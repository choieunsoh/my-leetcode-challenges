// 2577. Minimum Time to Visit a Cell In a Grid
// https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  if (grid[0][1] > 1 && grid[1][0] > 1) return -1;

  const dx = [-1, 0, 1, 0, -1];
  const visited = Array.from({ length: m }, () => Array(n).fill(Number.MAX_VALUE));
  visited[0][0] = 0;

  const pq = new MinPriorityQueue((a) => a[0]);
  pq.enqueue([0, 0, 0]);

  while (!pq.isEmpty()) {
    const [t, i, j] = pq.dequeue();
    if (i === m - 1 && j === n - 1) return t;

    for (let k = 0; k < 4; k++) {
      const x = i + dx[k];
      const y = j + dx[k + 1];
      if (x < 0 || x >= m || y < 0 || y >= n || t + 1 >= visited[x][y]) continue;

      let times = 0;
      const next = grid[x][y];
      const diff = next - t;
      if (t + 1 > next) {
        times = t + 1;
      } else if (diff & 1) {
        times = next;
      } else {
        times = next + 1;
      }

      pq.enqueue([times, x, y]);
      visited[x][y] = times;
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
