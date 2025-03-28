// 2503. Maximum Number of Points From Grid Queries
// https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/description/
// T.C.: O(k log mn + mn log mn)
// S.C.: O(mn)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function (grid, queries) {
  const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const queryCount = queries.length;
  const result = new Array(queryCount).fill(0);
  const rowCount = grid.length;
  const colCount = grid[0].length;
  const totalCells = rowCount * colCount;
  const thresholdForMaxPoints = new Array(totalCells + 1).fill(0);
  const minValueToReach = Array.from({ length: rowCount }, () => new Array(colCount).fill(Number.MAX_VALUE));

  minValueToReach[0][0] = grid[0][0];

  const pq = new MinPriorityQueue((a) => a[2]);
  pq.enqueue([0, 0, grid[0][0]]);
  let visitedCells = 0;

  while (!pq.isEmpty()) {
    const current = pq.dequeue();
    thresholdForMaxPoints[++visitedCells] = current[2];

    for (const direction of DIRECTIONS) {
      const newRow = current[0] + direction[0];
      const newCol = current[1] + direction[1];

      if (
        newRow >= 0 &&
        newRow < rowCount &&
        newCol >= 0 &&
        newCol < colCount &&
        minValueToReach[newRow][newCol] === Number.MAX_VALUE
      ) {
        minValueToReach[newRow][newCol] = Math.max(current[2], grid[newRow][newCol]);
        pq.enqueue([newRow, newCol, minValueToReach[newRow][newCol]]);
      }
    }
  }

  for (let i = 0; i < queryCount; i++) {
    const threshold = queries[i];
    let left = 0;
    let right = totalCells;

    while (left < right) {
      const mid = (left + right + 1) >>> 1;
      if (thresholdForMaxPoints[mid] < threshold) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    result[i] = left;
  }

  return result;
};

var grid = [
    [1, 2, 3],
    [2, 5, 7],
    [3, 5, 1],
  ],
  queries = [5, 6, 2];
var expected = [5, 8, 1];
var result = maxPoints(grid, queries);
console.log(result, result.join() === expected.join());

var grid = [
    [5, 2, 1],
    [1, 1, 2],
  ],
  queries = [3];
var expected = [0];
var result = maxPoints(grid, queries);
console.log(result, result.join() === expected.join());
