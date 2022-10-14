// https://leetcode.com/problems/spiral-matrix/
// 54. Spiral Matrix
function spiralOrder_TS(matrix: number[][]): number[] {
  const spiral: number[] = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const total = rows * cols;
  let left = 0;
  let right = cols - 1;
  let top = 0;
  let bottom = rows - 1;
  while (spiral.length < total) {
    for (let i = left; i <= right; i++) {
      if (spiral.length === total) return spiral;
      spiral.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      if (spiral.length === total) return spiral;
      spiral.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i >= left; i--) {
      if (spiral.length === total) return spiral;
      spiral.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      if (spiral.length === total) return spiral;
      spiral.push(matrix[i][left]);
    }
    left++;
  }
  return spiral;
}

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
var result = spiralOrder_TS(matrix);
console.log(result.join(' '), result.join('') === expected.join(''));

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
var expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
var result = spiralOrder_TS(matrix);
console.log(result.join(' '), result.join('') === expected.join(''));

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
var expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
var result = spiralOrder_TS(matrix);
console.log(result.join(' '), result.join('') === expected.join(''));
