// 417. Pacific Atlantic Water Flow
// https://leetcode.com/problems/pacific-atlantic-water-flow/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  // Check if input is empty
  if (heights.length === 0 || heights[0].length === 0) {
    return [];
  }

  const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  // Save initial values to parameters
  const numRows = heights.length;
  const numCols = heights[0].length;

  // Setup each queue with cells adjacent to their respective ocean
  const pacificQueue = [];
  const atlanticQueue = [];
  for (let i = 0; i < numRows; i++) {
    pacificQueue.push([i, 0]);
    atlanticQueue.push([i, numCols - 1]);
  }
  for (let i = 0; i < numCols; i++) {
    pacificQueue.push([0, i]);
    atlanticQueue.push([numRows - 1, i]);
  }

  // Perform a BFS for each ocean to find all cells accessible by each ocean
  const pacificReachable = bfs(pacificQueue);
  const atlanticReachable = bfs(atlanticQueue);

  // Find all cells that can reach both oceans
  const commonCells = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (pacificReachable[i][j] && atlanticReachable[i][j]) {
        commonCells.push([i, j]);
      }
    }
  }
  return commonCells;

  function bfs(queue) {
    const reachable = Array.from({ length: numRows }, () => new Array(numCols).fill(false));
    while (queue.length > 0) {
      const cell = queue.shift();
      // This cell is reachable, so mark it
      reachable[cell[0]][cell[1]] = true;
      for (const dir of DIRECTIONS) {
        // Check all 4 directions
        const newRow = cell[0] + dir[0];
        const newCol = cell[1] + dir[1];
        // Check if new cell is within bounds
        if (newRow < 0 || newRow >= numRows || newCol < 0 || newCol >= numCols) {
          continue;
        }
        // Check that the new cell hasn't already been visited
        if (reachable[newRow][newCol]) {
          continue;
        }
        // Check that the new cell has a higher or equal height,
        // So that water can flow from the new cell to the old cell
        if (heights[newRow][newCol] < heights[cell[0]][cell[1]]) {
          continue;
        }
        // If we've gotten this far, that means the new cell is reachable
        queue.push([newRow, newCol]);
      }
    }
    return reachable;
  }
};

var heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
var expected = [
  [0, 4],
  [1, 3],
  [1, 4],
  [2, 2],
  [3, 0],
  [3, 1],
  [4, 0],
];
var result = pacificAtlantic(heights);
console.log(result, result.join() === expected.join());

var heights = [[1]];
var expected = [[0, 0]];
var result = pacificAtlantic(heights);
console.log(result, result.join() === expected.join());
