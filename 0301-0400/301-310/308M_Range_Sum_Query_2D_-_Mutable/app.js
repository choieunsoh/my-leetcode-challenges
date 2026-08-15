// 308. Range Sum Query 2D - Mutable
// https://leetcode.com/problems/range-sum-query-2d-mutable/description/
// T.C.: O(log m * log n)
// S.C.: O(m * n)
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.rows = matrix.length;
  if (this.rows === 0) return;
  this.cols = matrix[0].length;
  this.bit = new Array(this.rows + 1);
  // Using 1 based indexing, hence resizing the bit array to (rows + 1, cols + 1)
  for (let i = 1; i <= this.rows; ++i) {
    this.bit[i] = new Array(this.cols + 1).fill(0);
  }
  this._buildBIT(matrix);
};

/**
 * Least Significant Bit - capture the right most non-zero bit of a number
 * @param {number} n
 * @return {number}
 */
NumMatrix.prototype._lsb = function (n) {
  return n & -n;
};

/**
 * Update BIT array with a value at position (r, c)
 * @param {number} r
 * @param {number} c
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype._updateBIT = function (r, c, val) {
  for (let i = r; i <= this.rows; i += this._lsb(i)) {
    for (let j = c; j <= this.cols; j += this._lsb(j)) {
      this.bit[i][j] += val;
    }
  }
};

/**
 * Query BIT array for sum from (0,0) to (r, c)
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
NumMatrix.prototype._queryBIT = function (r, c) {
  let sum = 0;
  for (let i = r; i > 0; i -= this._lsb(i)) {
    for (let j = c; j > 0; j -= this._lsb(j)) {
      sum += this.bit[i][j];
    }
  }
  return sum;
};

/**
 * Build BIT array from matrix
 * @param {number[][]} matrix
 * @return {void}
 */
NumMatrix.prototype._buildBIT = function (matrix) {
  for (let i = 1; i <= this.rows; ++i) {
    for (let j = 1; j <= this.cols; ++j) {
      const val = matrix[i - 1][j - 1];
      this._updateBIT(i, j, val);
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function (row, col, val) {
  const old_val = this.sumRegion(row, col, row, col);
  // handling 1-based indexing
  row++;
  col++;
  const diff = val - old_val;
  this._updateBIT(row, col, diff);
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  // handling 1-based indexing
  row1++;
  col1++;
  row2++;
  col2++;
  const a = this._queryBIT(row2, col2);
  const b = this._queryBIT(row1 - 1, col1 - 1);
  const c = this._queryBIT(row2, col1 - 1);
  const d = this._queryBIT(row1 - 1, col2);
  return a + b - (c + d);
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
