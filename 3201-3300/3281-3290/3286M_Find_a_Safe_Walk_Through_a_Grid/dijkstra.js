// 3286. Find a Safe Walk Through a Grid
// https://leetcode.com/problems/find-a-safe-walk-through-a-grid/description/
// T.C.: O(mn log (mn))
// S.C.: O(mn)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function (grid, health) {
  const m = grid.length;
  const n = grid[0].length;
  const dis = Array.from({ length: m }, () => new Array(n).fill(-1));
  const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const pq = new MinPriorityQueue({
    compare: (a, b) => a[0] - b[0],
  });
  pq.enqueue([grid[0][0], 0, 0]);

  while (!pq.isEmpty()) {
    const [val, cx, cy] = pq.dequeue();
    if (dis[cx][cy] >= 0) {
      continue;
    }
    dis[cx][cy] = val;

    for (const [dx, dy] of dirs) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (nx < 0 || ny < 0 || nx >= m || ny >= n || dis[nx][ny] >= 0) {
        continue;
      }

      pq.enqueue([val + grid[nx][ny], nx, ny]);
    }
  }

  return dis[m - 1][n - 1] < health;
};

var grid = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
  ],
  health = 1;
var expected = true;
var result = findSafeWalk(grid, health);
console.log(result, result === expected);

var grid = [
    [0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0, 1],
    [0, 0, 1, 0, 1, 0],
  ],
  health = 3;
var expected = false;
var result = findSafeWalk(grid, health);
console.log(result, result === expected);

var grid = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  health = 5;
var expected = true;
var result = findSafeWalk(grid, health);
console.log(result, result === expected);
