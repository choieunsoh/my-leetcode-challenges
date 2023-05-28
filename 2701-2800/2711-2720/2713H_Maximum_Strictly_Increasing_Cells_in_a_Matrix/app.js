// 2713. Maximum Strictly Increasing Cells in a Matrix
// https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/
/**
 * @param {number[][]} mat
 * @return {number}
 */
var maxIncreasingCells = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const map = new Map();
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const num = mat[row][col];
      if (!map.has(num)) map.set(num, []);
      map.get(num).push([row, col]);
    }
  }

  let result = 0;
  const sortedList = [...map.entries()].sort((a, b) => a[0] - b[0]).map(([, list]) => list);
  const rowMax = new Array(rows).fill(0);
  const colMax = new Array(cols).fill(0);
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));
  for (const list of sortedList) {
    for (const [r, c] of list) {
      dp[r][c] = Math.max(rowMax[r], colMax[c]) + 1;
      if (dp[r][c] > result) result = dp[r][c];
    }
    for (const [r, c] of list) {
      rowMax[r] = Math.max(rowMax[r], dp[r][c]);
      colMax[c] = Math.max(colMax[c], dp[r][c]);
    }
  }

  return result;
};

var mat = [
  [3, 1],
  [3, 4],
];
var expected = 2;
var result = maxIncreasingCells(mat);
console.log(result, result === expected);

var mat = [
  [1, 1],
  [1, 1],
];
var expected = 1;
var result = maxIncreasingCells(mat);
console.log(result, result === expected);

var mat = [
  [3, 1, 6],
  [-9, 5, 7],
];
var expected = 4;
var result = maxIncreasingCells(mat);
console.log(result, result === expected);
