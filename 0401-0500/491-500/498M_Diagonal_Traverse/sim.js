// 498. Diagonal Traverse
// https://leetcode.com/problems/diagonal-traverse/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const result = new Array(rows * cols);

  let row = 0;
  let col = 0;
  let goUp = 1;
  let index = 0;
  while (row < rows && col < cols) {
    result[index++] = mat[row][col];

    const newRow = row + (goUp === 1 ? -1 : 1);
    const newColumn = col + (goUp === 1 ? 1 : -1);

    if (newRow < 0 || newRow === rows || newColumn < 0 || newColumn === cols) {
      if (goUp === 1) {
        row += col === cols - 1 ? 1 : 0;
        col += col < cols - 1 ? 1 : 0;
      } else {
        col += row === rows - 1 ? 1 : 0;
        row += row < rows - 1 ? 1 : 0;
      }

      goUp = 1 - goUp;
    } else {
      row = newRow;
      col = newColumn;
    }
  }
  return result;
};

var mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = [1, 2, 4, 7, 5, 3, 6, 8, 9];
var result = findDiagonalOrder(mat);
console.log(result.join(' '), expected.join('') === result.join(''));

var mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
var expected = [1, 2, 5, 9, 6, 3, 4, 7, 10, 11, 8, 12];
var result = findDiagonalOrder(mat);
console.log(result, expected.join('') === result.join(''));

var mat = [
  [1, 2],
  [3, 4],
];
var expected = [1, 2, 3, 4];
var result = findDiagonalOrder(mat);
console.log(result, expected.join('') === result.join(''));

var mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];
var expected = [1, 2, 5, 9, 6, 3, 4, 7, 10, 13, 17, 14, 11, 8, 12, 15, 18, 19, 16, 20];
var result = findDiagonalOrder(mat);
console.log(result, expected.join('') === result.join(''));
