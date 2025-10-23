// 2194. Cells in a Range on an Excel Sheet
// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  const result = [];
  for (let col = s.charCodeAt(0); col <= s.charCodeAt(3); col++) {
    for (let row = Number(s[1]); row <= Number(s[4]); row++) {
      result.push(`${String.fromCharCode(col)}${row}`);
    }
  }
  return result;
};

var s = 'K1:L2';
var expected = ['K1', 'K2', 'L1', 'L2'];
var result = cellsInRange(s);
console.log(result, result.join() === expected.join());

var s = 'A1:F1';
var expected = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1'];
var result = cellsInRange(s);
console.log(result, result.join() === expected.join());
