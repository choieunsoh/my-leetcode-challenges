// 1267. Count Servers that Communicate
// https://leetcode.com/problems/count-servers-that-communicate/description/
// T.C.: O(m*n)
// S.C.: O(m+n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const rowCounts = new Array(cols).fill(0);
  const colCounts = new Array(rows).fill(0);

  // Count servers in each row and each column
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        rowCounts[col]++;
        colCounts[row]++;
      }
    }
  }

  // Count servers that can communicate (in the same row or column)
  let communicableServersCount = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1 && (rowCounts[col] > 1 || colCounts[row] > 1)) {
        communicableServersCount++;
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
