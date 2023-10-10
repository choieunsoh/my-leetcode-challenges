// 1030. Matrix Cells in Distance Order
// https://leetcode.com/problems/matrix-cells-in-distance-order/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const coors = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      coors.push([i, j]);
    }
  }
  return coors.sort((a, b) => distance(a) - distance(b));

  function distance([row, col]) {
    return Math.abs(row - rCenter) + Math.abs(col - cCenter);
  }
};

var rows = 1,
  cols = 2,
  rCenter = 0,
  cCenter = 0;
var expected = [
  [0, 0],
  [0, 1],
];
var result = allCellsDistOrder(rows, cols, rCenter, cCenter);
console.log(result, result.join() === expected.join());

var rows = 2,
  cols = 2,
  rCenter = 0,
  cCenter = 1;
var expected = [
  [0, 1],
  [0, 0],
  [1, 1],
  [1, 0],
];
var result = allCellsDistOrder(rows, cols, rCenter, cCenter);
console.log(result, result.join() === expected.join());

var rows = 2,
  cols = 3,
  rCenter = 1,
  cCenter = 2;
var expected = [
  [1, 2],
  [0, 2],
  [1, 1],
  [0, 1],
  [1, 0],
  [0, 0],
];
var result = allCellsDistOrder(rows, cols, rCenter, cCenter);
console.log(result, result.join() === expected.join());

var rows = 3,
  cols = 5,
  rCenter = 2,
  cCenter = 3;
var expected = [
  [2, 3],
  [1, 3],
  [2, 2],
  [2, 4],
  [0, 3],
  [1, 2],
  [1, 4],
  [2, 1],
  [0, 2],
  [0, 4],
  [1, 1],
  [2, 0],
  [0, 1],
  [1, 0],
  [0, 0],
];
var result = allCellsDistOrder(rows, cols, rCenter, cCenter);
console.log(result, result.join() === expected.join());
