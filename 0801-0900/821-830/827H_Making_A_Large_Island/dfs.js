// 827. Making A Large Island
// https://leetcode.com/problems/making-a-large-island/description/
// T.C.: O(n*m)
// S.C.: O(n*m)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const islandSizes = new Map();
  let islandId = 2;

  // Step 1: Mark all islands and calculate their sizes
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        islandSizes.set(islandId, exploreIsland(islandId, row, col));
        islandId++;
      }
    }
  }

  // If there are no islands, return 1
  if (islandSizes.size === 0) {
    return 1;
  }

  // If the entire grid is one island, return its size or size + 1
  if (islandSizes.size === 1) {
    islandId--;
    return Math.min(rows * cols, islandSizes.get(islandId) + 1);
  }

  let maxIslandSize = 1;

  // Step 2: Try converting every 0 to 1 and calculate the resulting island size
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0) {
        let currentIslandSize = 1;
        const neighboringIslands = new Set();

        // Check down
        if (row + 1 < rows && grid[row + 1][col] > 1) {
          neighboringIslands.add(grid[row + 1][col]);
        }

        // Check up
        if (row - 1 >= 0 && grid[row - 1][col] > 1) {
          neighboringIslands.add(grid[row - 1][col]);
        }

        // Check right
        if (col + 1 < cols && grid[row][col + 1] > 1) {
          neighboringIslands.add(grid[row][col + 1]);
        }

        // Check left
        if (col - 1 >= 0 && grid[row][col - 1] > 1) {
          neighboringIslands.add(grid[row][col - 1]);
        }

        // Sum the sizes of all unique neighboring islands
        for (const islandId of neighboringIslands) {
          currentIslandSize += islandSizes.get(islandId);
        }

        maxIslandSize = Math.max(maxIslandSize, currentIslandSize);
      }
    }
  }

  return maxIslandSize;

  function exploreIsland(islandId, row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== 1) {
      return 0;
    }

    grid[row][col] = islandId;
    return (
      1 +
      exploreIsland(islandId, row + 1, col) +
      exploreIsland(islandId, row - 1, col) +
      exploreIsland(islandId, row, col + 1) +
      exploreIsland(islandId, row, col - 1)
    );
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
