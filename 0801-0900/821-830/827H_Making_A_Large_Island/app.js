// 827. Making A Large Island
// https://leetcode.com/problems/making-a-large-island/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  const dir = [1, 0, -1, 0, 1];
  const n = grid.length;
  const areas = new Map();
  let islandId = 2;
  let maxArea = -1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const area = getArea(i, j);
        areas.set(islandId++, area);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        const neighborArea = countNeighborArea(i, j);
        maxArea = Math.max(maxArea, neighborArea + 1);
      }
    }
  }

  return maxArea;

  function getArea(i, j) {
    const visited = new Set();
    let queue = [[i, j]];
    while (queue.length) {
      const newQueue = [];
      for (const [row, col] of queue) {
        const key = row * n + col;
        if (visited.has(key)) continue;
        visited.add(key);
        grid[row][col] = islandId;

        for (let k = 0; k < 4; k++) {
          const newRow = row + dir[k];
          const newCol = col + dir[k + 1];
          const newKey = newRow * n + newCol;
          if (newRow < 0 || newRow >= n || newCol < 0 || newCol >= n) continue;
          if (visited.has(newKey) || grid[newRow][newCol] === 0) continue;

          newQueue.push([newRow, newCol]);
        }
      }
      queue = newQueue;
    }

    return visited.size;
  }

  function countNeighborArea(row, col) {
    const neighbors = new Set();
    for (let k = 0; k < 4; k++) {
      const newRow = row + dir[k];
      const newCol = col + dir[k + 1];

      if (newRow < 0 || newRow >= n || newCol < 0 || newCol >= n) continue;
      if (grid[newRow][newCol] === 0) continue;

      neighbors.add(grid[newRow][newCol]);
    }

    return [...neighbors].reduce((area, islandId) => area + (areas.get(islandId) ?? 0), 0);
  }
};

var grid = [
  [1, 0],
  [0, 1],
];
var expected = 3;
var result = largestIsland(grid);
console.log(result, result === expected);

var grid = [
  [1, 1],
  [1, 0],
];
var expected = 4;
var result = largestIsland(grid);
console.log(result, result === expected);

var grid = [
  [1, 1],
  [1, 1],
];
var expected = 4;
var result = largestIsland(grid);
console.log(result, result === expected);
