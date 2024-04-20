// 1992. Find All Groups of Farmland
// https://leetcode.com/problems/find-all-groups-of-farmland/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
  const result = [];
  const rows = land.length;
  const cols = land[0].length;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (land[row][col] === 1) {
        const group = findLand(row, col);
        result.push(group);
      }
    }
  }
  return result;

  function findLand(row, col) {
    const [startRow, startCol] = [row, col];
    while (col < cols && land[row][col] === 1) {
      land[row][col] = 2;
      col++;
    }
    col--;
    const endCol = col;

    row++;
    while (row < rows && land[row][col] === 1) {
      land[row][col] = 2;
      row++;
    }
    row--;
    const endRow = row;

    for (let i = startRow + 1; i <= endRow; i++) {
      for (let j = startCol; j < endCol; j++) {
        if (land[i][j] === 1) land[i][j] = 2;
      }
    }

    return [startRow, startCol, endRow, endCol];
  }
};

var land = [
  [1, 0, 0],
  [0, 1, 1],
  [0, 1, 1],
];
var expected = [
  [0, 0, 0, 0],
  [1, 1, 2, 2],
];
var result = findFarmland(land);
console.log(result, result.join() === expected.join());

var land = [
  [1, 1],
  [1, 1],
];
var expected = [[0, 0, 1, 1]];
var result = findFarmland(land);
console.log(result, result.join() === expected.join());

var land = [[0]];
var expected = [];
var result = findFarmland(land);
console.log(result, result.join() === expected.join());
