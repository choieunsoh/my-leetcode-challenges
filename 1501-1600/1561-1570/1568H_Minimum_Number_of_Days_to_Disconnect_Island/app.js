// 1568. Minimum Number of Days to Disconnect Island
// https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/description/
// Tarjan's Algorithm
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  // Directions for adjacent cells: right, down, left, up
  const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const rows = grid.length;
  const cols = grid[0].length;
  const apInfo = { hasArticulationPoint: false, time: 0 };
  let landCells = 0;
  let islandCount = 0;

  // Arrays to store information for each cell
  const discoveryTime = Array.from({ length: rows }, () => new Array(cols).fill(-1)); // Time when a cell is first discovered
  const lowestReachable = Array.from({ length: rows }, () => new Array(cols).fill(-1)); // Lowest discovery time reachable from the subtree rooted at this cell
  const parentCell = Array.from({ length: rows }, () => new Array(cols).fill(-1)); // Parent of each cell in DFS tree

  // Traverse the grid to find islands and articulation points
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        landCells++;
        if (discoveryTime[i][j] === -1) {
          // If not yet visited
          // Start DFS for a new island
          findArticulationPoints(grid, i, j, discoveryTime, lowestReachable, parentCell, apInfo);
          islandCount++;
        }
      }
    }
  }

  // Determine the minimum number of days to disconnect the grid
  if (islandCount === 0 || islandCount >= 2) return 0; // Already disconnected or no land
  if (landCells === 1) return 1; // Only one land cell
  if (apInfo.hasArticulationPoint) return 1; // An articulation point exists

  return 2; // Need to remove any two land cells

  function findArticulationPoints(grid, row, col, discoveryTime, lowestReachable, parentCell, apInfo) {
    const rows = grid.length;
    const cols = grid[0].length;
    discoveryTime[row][col] = apInfo.time++;
    lowestReachable[row][col] = discoveryTime[row][col];
    let children = 0;

    // Explore all adjacent cells
    for (const direction of DIRECTIONS) {
      const newRow = row + direction[0];
      const newCol = col + direction[1];
      if (isValidLandCell(grid, newRow, newCol)) {
        if (discoveryTime[newRow][newCol] === -1) {
          children++;
          parentCell[newRow][newCol] = row * cols + col; // Set parent
          findArticulationPoints(grid, newRow, newCol, discoveryTime, lowestReachable, parentCell, apInfo);

          // Update lowest reachable time
          lowestReachable[row][col] = Math.min(lowestReachable[row][col], lowestReachable[newRow][newCol]);

          // Check for articulation point condition
          if (lowestReachable[newRow][newCol] >= discoveryTime[row][col] && parentCell[row][col] !== -1) {
            apInfo.hasArticulationPoint = true;
          }
        } else if (newRow * cols + newCol !== parentCell[row][col]) {
          // Update lowest reachable time for back edge
          lowestReachable[row][col] = Math.min(lowestReachable[row][col], discoveryTime[newRow][newCol]);
        }
      }
    }

    // Root of DFS tree is an articulation point if it has more than one child
    if (parentCell[row][col] === -1 && children > 1) {
      apInfo.hasArticulationPoint = true;
    }
  }

  // Check if the given cell is a valid land cell
  function isValidLandCell(grid, row, col) {
    const rows = grid.length,
      cols = grid[0].length;
    return row >= 0 && col >= 0 && row < rows && col < cols && grid[row][col] === 1;
  }
};

var grid = [
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];
var expected = 2;
var result = minDays(grid);
console.log(result, result === expected);

var grid = [[1, 1]];
var expected = 2;
var result = minDays(grid);
console.log(result, result === expected);

var grid = [[1, 0, 1, 0]];
var expected = 0;
var result = minDays(grid);
console.log(result, result === expected);
