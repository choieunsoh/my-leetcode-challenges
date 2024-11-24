// 778. Swim in Rising Water
// https://leetcode.com/problems/swim-in-rising-water/description/
// T.C.: O(n^2 log n)
// S.C.: O(n^2)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const n = grid.length;
  const MAX = n * n + 1;
  const dir = [-1, 0, 1, 0, -1];
  const pq = new PriorityQueue({ compare: (a, b) => a[0] - b[0] });

  let result = grid[0][0];
  let i = 0;
  let j = 0;
  while (i < n - 1 || j < n - 1) {
    for (let d = 0; d < 4; d++) {
      const [ni, nj] = [i + dir[d], j + dir[d + 1]];
      if (ni < 0 || ni >= n || nj < 0 || nj >= n || grid[ni][nj] === MAX) continue;
      pq.enqueue([grid[ni][nj], ni, nj]);
      grid[ni][nj] = MAX;
    }

    const [next, ni, nj] = pq.dequeue();
    result = Math.max(result, next);
    i = ni;
    j = nj;
  }
  return result;
};

var grid = [
  [0, 2],
  [1, 3],
];
var expected = 3;
var result = swimInWater(grid);
console.log(result, result === expected);

var grid = [
  [0, 1, 2, 3, 4],
  [24, 23, 22, 21, 5],
  [12, 13, 14, 15, 16],
  [11, 17, 18, 19, 20],
  [10, 9, 8, 7, 6],
];
var expected = 16;
var result = swimInWater(grid);
console.log(result, result === expected);
