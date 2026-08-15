// 308. Range Sum Query 2D - Mutable
// https://leetcode.com/problems/range-sum-query-2d-mutable/description/
// T.C.: O(m * n)
// S.C.: O(1)
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.data = matrix;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function (row, col, val) {
  this.data[row][col] = val;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;
  for (let r = row1; r <= row2; r++) {
    for (let c = col1; c <= col2; c++) {
      sum += this.data[r][c];
    }
  }
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */

function runTest(ops, inputs, outputs) {
  let obj;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i];
    const output = outputs[i];

    if (op === 'NumMatrix') {
      obj = new NumMatrix(...input);
      console.log('NumMatrix', obj);
    } else if (op === 'update') {
      obj.update(...input);
      console.log('update', input);
    } else if (op === 'sumRegion') {
      const result = obj.sumRegion(...input);
      console.log('sumRegion', input, result, result === output);
    }
  }
}

var ops = ['NumMatrix', 'sumRegion', 'update', 'sumRegion'],
  inputs = [
    [
      [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5],
      ],
    ],
    [2, 1, 4, 3],
    [3, 2, 2],
    [2, 1, 4, 3],
  ],
  outputs = [null, 8, null, 10];
runTest(ops, inputs, outputs);
