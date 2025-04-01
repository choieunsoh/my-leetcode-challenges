// 317. Shortest Distance from All Buildings
// https://leetcode.com/problems/shortest-distance-from-all-buildings/description/
// T.C.: O(n^2 * m^2)
// S.C.: O(n * m)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const MAX = Number.MAX_SAFE_INTEGER;
  let minDistance = MAX;
  let totalHouses = 0;

  // Store { total_dist, houses_count } for each cell.
  const distances = Array.from({ length: rows }, () => Array.from({ length: cols }, () => [0, 0]));

  // Count houses and start bfs from each house.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        totalHouses++;
        bfs(grid, distances, row, col);
      }
    }
  }

  // Check all empty lands with houses count equal to total houses and find the min ans.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (distances[row][col][1] === totalHouses) {
        minDistance = Math.min(minDistance, distances[row][col][0]);
      }
    }
  }

  // If we haven't found a valid cell return -1.
  if (minDistance === MAX) {
    return -1;
  }
  return minDistance;

  function bfs(grid, distances, row, col) {
    // Use a queue to do a bfs, starting from each cell located at (row, col).
    const q = [[row, col]];

    // Keep track of visited cells.
    const vis = Array.from({ length: rows }, () => new Array(cols).fill(false));
    vis[row][col] = true;

    let steps = 0;

    while (q.length > 0) {
      const levelSize = q.length;
      for (let i = 0; i < levelSize; i++) {
        const [currRow, currCol] = q.shift();

        // If we reached an empty cell, then add the distance
        // and increment the count of houses reached at this cell.
        if (grid[currRow][currCol] === 0) {
          distances[currRow][currCol][0] += steps;
          distances[currRow][currCol][1] += 1;
        }

        // Traverse the next cells which is not a blockage.
        for (const dir of dirs) {
          const nextRow = currRow + dir[0];
          const nextCol = currCol + dir[1];

          if (nextRow >= 0 && nextCol >= 0 && nextRow < rows && nextCol < cols) {
            if (!vis[nextRow][nextCol] && grid[nextRow][nextCol] === 0) {
              vis[nextRow][nextCol] = true;
              q.push([nextRow, nextCol]);
            }
          }
        }
      }

      // After traversing one level cells, increment the steps by 1.
      steps++;
    }
  }
};

var grid = [
  [1, 0, 2, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];
var expected = 7;
var result = shortestDistance(grid);
console.log(result, result === expected);

var grid = [[1, 0]];
var expected = 1;
var result = shortestDistance(grid);
console.log(result, result === expected);

var grid = [[1]];
var expected = -1;
var result = shortestDistance(grid);
console.log(result, result === expected);

var grid = [
  [0, 2, 1],
  [1, 0, 2],
  [0, 1, 0],
];
var expected = -1;
var result = shortestDistance(grid);
console.log(result, result === expected);

var grid = [
  [1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [0, 1, 1, 1, 1, 0],
];
var expected = 88;
var result = shortestDistance(grid);
console.log(result, result === expected);
