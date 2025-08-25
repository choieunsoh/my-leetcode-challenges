// 498. Diagonal Traverse
// https://leetcode.com/problems/diagonal-traverse/
// T.C.: O(n*m)
// S.C.: O(n*m)
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const result = new Array(rows * cols);

  let k = 0;
  for (let d = 0; d < rows + cols - 1; d++) {
    const temp = [];

    let r = d < cols ? 0 : d - cols + 1;
    let c = d < cols ? d : cols - 1;

    while (r < rows && c > -1) {
      temp.push(mat[r][c]);
      r++;
      c--;
    }

    if (d % 2 === 0) {
      temp.reverse();
    }

    for (let i = 0; i < temp.length; i++) {
      result[k++] = temp[i];
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
