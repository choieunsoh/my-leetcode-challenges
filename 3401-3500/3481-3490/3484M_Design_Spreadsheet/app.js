// 3484. Design Spreadsheet
// https://leetcode.com/problems/design-spreadsheet/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} rows
 */
var Spreadsheet = function (rows) {
  this.cells = new Map();
};

/**
 * @param {string} cell
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
  this.cells.set(cell, value);
};

/**
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
  this.cells.delete(cell);
};

/**
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function (formula) {
  // =X+Y
  const [xCell, yCell] = formula.slice(1).split('+');
  const xVal = xCell[0] >= 'A' ? (this.cells.get(xCell) ?? 0) : Number(xCell);
  const yVal = yCell[0] >= 'A' ? (this.cells.get(yCell) ?? 0) : Number(yCell);
  return xVal + yVal;
};

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const args = inputs[i];
    if (ops[i] === 'Spreadsheet') {
      obj = new Spreadsheet(...args);
    } else {
      const expected = outputs[i];
      const result = obj[ops[i]](...args) ?? null;
      console.log(i, ops[i], args, result, result === expected);
    }
  }
  console.log();
}

var ops = ['Spreadsheet', 'getValue', 'setCell', 'getValue', 'setCell', 'getValue', 'resetCell', 'getValue'],
  inputs = [[3], ['=5+7'], ['A1', 10], ['=A1+6'], ['B2', 15], ['=A1+B2'], ['A1'], ['=A1+B2']],
  outputs = [null, 12, null, 16, null, 25, null, 15];
run(ops, inputs, outputs);
