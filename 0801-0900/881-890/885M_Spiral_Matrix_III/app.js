// 885. Spiral Matrix III
// https://leetcode.com/problems/spiral-matrix-iii/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  const total = rows * cols;
  const result = [[rStart, cStart]];
  let steps = 0;
  let [row, col] = [rStart, cStart];
  while (result.length < total) {
    steps++;

    // right
    for (let i = 0; i < steps; i++) {
      col++;
      if (isValid(row, col)) result.push([row, col]);
    }

    // bottom
    for (let i = 0; i < steps; i++) {
      row++;
      if (isValid(row, col)) result.push([row, col]);
    }

    steps++;

    // left
    for (let i = 0; i < steps; i++) {
      col--;
      if (isValid(row, col)) result.push([row, col]);
    }

    // top
    for (let i = 0; i < steps; i++) {
      row--;
      if (isValid(row, col)) result.push([row, col]);
    }
  }
  return result;

  function isValid(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
  }
};

var rows = 1,
  cols = 4,
  rStart = 0,
  cStart = 0;
var expected = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
];
var result = spiralMatrixIII(rows, cols, rStart, cStart);
console.log(result, result.join() === expected.join());

var rows = 5,
  cols = 6,
  rStart = 1,
  cStart = 4;
var expected = [
  [1, 4],
  [1, 5],
  [2, 5],
  [2, 4],
  [2, 3],
  [1, 3],
  [0, 3],
  [0, 4],
  [0, 5],
  [3, 5],
  [3, 4],
  [3, 3],
  [3, 2],
  [2, 2],
  [1, 2],
  [0, 2],
  [4, 5],
  [4, 4],
  [4, 3],
  [4, 2],
  [4, 1],
  [3, 1],
  [2, 1],
  [1, 1],
  [0, 1],
  [4, 0],
  [3, 0],
  [2, 0],
  [1, 0],
  [0, 0],
];
var result = spiralMatrixIII(rows, cols, rStart, cStart);
console.log(result, result.join() === expected.join());
