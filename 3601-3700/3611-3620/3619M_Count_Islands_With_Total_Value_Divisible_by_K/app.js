// 3619. Count Islands With Total Value Divisible by K
// https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function (grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0) {
        continue;
      }
      let sum = 0;

      const stack = [[row, col, grid[row][col]]];

      grid[row][col] = 0;

      while (stack.length > 0) {
        const [r, c, value] = stack.pop();
        sum += value;

        for (const [dr, dc] of directions) {
          const nr = dr + r;
          const nc = dc + c;

          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] !== 0) {
            stack.push([nr, nc, grid[nr][nc]]);
            grid[nr][nc] = 0;
          }
        }
      }
      if (sum % k === 0) {
        count++;
      }
    }
  }
  return count;
};

var grid = [
    [0, 2, 1, 0, 0],
    [0, 5, 0, 0, 5],
    [0, 0, 1, 0, 0],
    [0, 1, 4, 7, 0],
    [0, 2, 0, 0, 8],
  ],
  k = 5;
var expected = 2;
var result = countIslands(grid, k);
console.log(result, result === expected);

var grid = [
    [3, 0, 3, 0],
    [0, 3, 0, 3],
    [3, 0, 3, 0],
  ],
  k = 3;
var expected = 6;
var result = countIslands(grid, k);
console.log(result, result === expected);
