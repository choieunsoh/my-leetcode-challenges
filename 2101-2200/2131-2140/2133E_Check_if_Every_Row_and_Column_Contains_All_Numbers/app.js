// 2133. Check if Every Row and Column Contains All Numbers
// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/description/
// T.C.: O(n * n)
// S.C.: O(n)
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const n = matrix.length;
  for (let row = 0; row < n; row++) {
    const rows = new Set();
    const cols = new Set();
    for (let col = 0; col < n; col++) {
      if (rows.has(matrix[row][col])) return false;
      rows.add(matrix[row][col]);

      if (cols.has(matrix[col][row])) return false;
      cols.add(matrix[col][row]);
    }
  }
  return true;
};

var matrix = [
  [1, 2, 3],
  [3, 1, 2],
  [2, 3, 1],
];
var expected = true;
var result = checkValid(matrix);
console.log(result, result === expected);

var matrix = [
  [1, 1, 1],
  [1, 2, 3],
  [1, 2, 3],
];
var expected = false;
var result = checkValid(matrix);
console.log(result, result === expected);
