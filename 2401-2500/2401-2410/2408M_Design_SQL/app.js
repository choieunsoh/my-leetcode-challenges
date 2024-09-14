// 2408. Design SQL
// https://leetcode.com/problems/design-sql/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[]} names
 * @param {number[]} columns
 */
var SQL = function (names, columns) {
  this.tables = new Map();
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const columnCount = columns[i];
    this.tables.set(name, { rows: new Map(), rowId: 0, columnCount });
  }
};

/**
 * @param {string} name
 * @param {string[]} row
 * @return {void}
 */
SQL.prototype.insertRow = function (name, row) {
  if (!this.tables.has(name)) return;

  const table = this.tables.get(name);
  table.rowId++;
  table.rows.set(table.rowId, row);
};

/**
 * @param {string} name
 * @param {number} rowId
 * @return {void}
 */
SQL.prototype.deleteRow = function (name, rowId) {
  if (!this.tables.has(name)) return;

  const table = this.tables.get(name);
  table.rows.delete(rowId);
};

/**
 * @param {string} name
 * @param {number} rowId
 * @param {number} columnId
 * @return {string}
 */
SQL.prototype.selectCell = function (name, rowId, columnId) {
  if (!this.tables.has(name)) return;

  const table = this.tables.get(name);
  const row = table.rows.get(rowId);
  return row[columnId - 1];
};

/**
 * Your SQL object will be instantiated and called as such:
 * var obj = new SQL(names, columns)
 * obj.insertRow(name,row)
 * obj.deleteRow(name,rowId)
 * var param_3 = obj.selectCell(name,rowId,columnId)
 */

function run(ops, inputs, outputs) {
  var sql = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'SQL':
        sql = new SQL(...args);
        break;
      case 'insertRow':
        sql.insertRow(...args);
        break;
      case 'selectCell':
        result = sql.selectCell(...args);
        break;
      case 'deleteRow':
        sql.deleteRow(...args);
        break;
      default:
        break;
    }
    console.log(i, op, args, expected, result, result === expected);
    console.log(sql.tables);
  }
}

var ops = ['SQL', 'insertRow', 'selectCell', 'insertRow', 'deleteRow', 'selectCell'],
  inputs = [
    [
      ['one', 'two', 'three'],
      [2, 3, 1],
    ],
    ['two', ['first', 'second', 'third']],
    ['two', 1, 3],
    ['two', ['fourth', 'fifth', 'sixth']],
    ['two', 1],
    ['two', 2, 2],
  ],
  outputs = [null, null, 'third', null, null, 'fifth'];
run(ops, inputs, outputs);
