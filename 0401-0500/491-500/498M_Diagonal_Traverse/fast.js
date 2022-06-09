// https://leetcode.com/problems/diagonal-traverse/
// 498. Diagonal Traverse
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const result = [];

  let i = 0;
  let j = 0;
  let up = true;
  while (i < mat.length && j < mat[i].length) {
    result.push(mat[i][j]);

    if (up === true) {
      if (j === mat[i].length - 1) {
        up = false;
        i++;
      } else if (i === 0) {
        up = false;
        j++;
      } else {
        i--;
        j++;
      }
    } else {
      if (i === mat.length - 1) {
        up = true;
        j++;
      } else if (j === 0) {
        up = true;
        i++;
      } else {
        i++;
        j--;
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

// 1 2 1
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
