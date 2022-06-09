// https://leetcode.com/problems/diagonal-traverse/
// 498. Diagonal Traverse
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const result = [];
  const rows = mat.length;
  const cols = mat[0].length;
  let row = 0;
  let col = 0;

  const validPosition = (i, j) => {
    const valid =
      row + i >= 0 && row + i < rows && col + j >= 0 && col + j < cols;
    if (valid) {
      row += i;
      col += j;
    }
    return valid;
  };

  while (result.length < rows * cols) {
    if (col < cols && row < rows) {
      result.push(mat[row][col]);
    }

    const up = (row + col) % 2 === 0;
    let valid = false;

    // try North East
    if (up) {
      valid = validPosition(-1, 1);
      if (!valid) {
        // try East
        valid = validPosition(0, 1);
      }
      if (!valid) {
        // try South
        valid = validPosition(1, 0);
      }
    } else {
      // try South West
      valid = validPosition(1, -1);
      if (!valid) {
        // try South
        valid = validPosition(1, 0);
      }
      if (!valid) {
        // try East
        valid = validPosition(0, 1);
      }
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
console.log(result.join(' '), expected.join('') === result.join(''));

var mat = [
  [1, 2],
  [3, 4],
];
var expected = [1, 2, 3, 4];
var result = findDiagonalOrder(mat);
console.log(result.join(' '), expected.join('') === result.join(''));

var mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];
var expected = [
  1, 2, 5, 9, 6, 3, 4, 7, 10, 13, 17, 14, 11, 8, 12, 15, 18, 19, 16, 20,
];
var result = findDiagonalOrder(mat);
console.log(result.join(' '), expected.join('') === result.join(''));
