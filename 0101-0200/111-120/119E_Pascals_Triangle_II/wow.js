// https://leetcode.com/problems/pascals-triangle-ii/
// 189. Pascal's Triangle II
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const row = new Array(rowIndex + 1);
  row[0] = row[rowIndex] = 1;
  for (let left = 1, right = rowIndex; left < rowIndex; left++, right--) {
    row[left] = (row[left - 1] * right) / left;
  }
  return row;
};

var rowIndex = 3;
var expected = [1, 3, 3, 1];
var result = getRow(rowIndex);
console.log(result.join(' '), result.join() === expected.join());

var rowIndex = 0;
var expected = [1];
var result = getRow(rowIndex);
console.log(result.join(' '), result.join() === expected.join());

var rowIndex = 1;
var expected = [1, 1];
var result = getRow(rowIndex);
console.log(result.join(' '), result.join() === expected.join());

var rowIndex = 10;
var expected = [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1];
var result = getRow(rowIndex);
console.log(result.join(' '), result.join() === expected.join());
