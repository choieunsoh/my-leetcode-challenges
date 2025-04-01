// 317. Shortest Distance from All Buildings
// https://leetcode.com/problems/shortest-distance-from-all-buildings/description/
// T.C.: O(n^2 * m^2)
// S.C.: O(n * m)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function (grid) {
  // Next four directions.
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const rows = grid.length;
  const cols = grid[0].length;

  // Total Matrix to store total distance sum for each empty cell.
  const total = Array.from({ length: rows }, () => new Array(cols).fill(0));

  let emptyLandValue = 0;
  let minDist = Number.MAX_SAFE_INTEGER;

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      // Start a BFS from each house.
      if (grid[row][col] === 1) {
        minDist = Number.MAX_SAFE_INTEGER;

        // Use a queue to perform a BFS, starting from the cell at (r, c).
        const q = [[row, col]];

        let steps = 0;

        while (q.length > 0) {
          steps++;

          const levelSize = q.length;
          for (let level = levelSize; level > 0; --level) {
            const [currRow, currCol] = q.shift();

            for (const dir of dirs) {
              const nextRow = currRow + dir[0];
              const nextCol = currCol + dir[1];

              // For each cell with the value equal to empty land value
              // add distance and decrement the cell value by 1.
              if (
                nextRow >= 0 &&
                nextRow < rows &&
                nextCol >= 0 &&
                nextCol < cols &&
                grid[nextRow][nextCol] === emptyLandValue
              ) {
                grid[nextRow][nextCol]--;
                total[nextRow][nextCol] += steps;

                q.push([nextRow, nextCol]);
                minDist = Math.min(minDist, total[nextRow][nextCol]);
              }
            }
          }
        }

        // Decrement empty land value to be searched in next iteration.
        emptyLandValue--;
      }
    }
  }

  return minDist === Number.MAX_SAFE_INTEGER ? -1 : minDist;
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
