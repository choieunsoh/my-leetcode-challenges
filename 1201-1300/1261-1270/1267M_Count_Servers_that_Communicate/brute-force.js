// 1267. Count Servers that Communicate
// https://leetcode.com/problems/count-servers-that-communicate/description/
// T.C.: O(m*n*(m+n))
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let communicableServersCount = 0;

  // Traverse through the grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0) continue;

      let canCommunicate = false;

      // Check for communication in the same row
      for (let otherCol = 0; otherCol < cols; otherCol++) {
        if (otherCol !== col && grid[row][otherCol] === 1) {
          canCommunicate = true;
          break;
        }
      }

      // If a server was found in the same row, increment
      // communicableServersCount
      if (canCommunicate) {
        communicableServersCount++;
      } else {
        // Check for communication in the same column
        for (let otherRow = 0; otherRow < rows; otherRow++) {
          if (otherRow !== row && grid[otherRow][col] === 1) {
            canCommunicate = true;
            break;
          }
        }

        // If a server was found in the same column, increment
        // communicableServersCount
        if (canCommunicate) {
          communicableServersCount++;
        }
      }
    }
  }

  return communicableServersCount;
};

var grid = [
  [1, 0],
  [0, 1],
];
var expected = 0;
var result = countServers(grid);
console.log(result, result === expected);

var grid = [
  [1, 0],
  [1, 1],
];
var expected = 3;
var result = countServers(grid);
console.log(result, result === expected);

var grid = [
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];
var expected = 4;
var result = countServers(grid);
console.log(result, result === expected);

var grid = [
  [0, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 0, 0, 1, 1],
  [0, 0, 1, 1, 0],
];
var expected = 12;
var result = countServers(grid);
console.log(result, result === expected);
