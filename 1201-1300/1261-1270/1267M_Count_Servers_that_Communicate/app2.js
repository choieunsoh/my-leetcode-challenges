// 1267. Count Servers that Communicate
// https://leetcode.com/problems/count-servers-that-communicate/description/
// T.C.: O(m*n)
// S.C.: O(m+n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  let communicableServersCount = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const rowCounts = new Array(cols).fill(0);
  const lastServerInCol = new Array(rows).fill(-1);

  // First pass to count servers in each row and column
  for (let row = 0; row < rows; row++) {
    let serverCountInRow = 0;
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        serverCountInRow++;
        rowCounts[col]++;
        lastServerInCol[row] = col;
      }
    }
    // If there is more than one server in the row, increase the count
    if (serverCountInRow !== 1) {
      communicableServersCount += serverCountInRow;
      lastServerInCol[row] = -1;
    }
  }

  // Second pass to check if servers can communicate
  for (let row = 0; row < rows; row++) {
    if (lastServerInCol[row] !== -1 && rowCounts[lastServerInCol[row]] > 1) {
      communicableServersCount++;
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
