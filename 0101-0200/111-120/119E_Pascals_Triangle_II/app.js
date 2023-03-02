// 119. Pascal's Triangle II
// https://leetcode.com/problems/pascals-triangle-ii/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];

  let prev = [1];
  for (let i = 1; i <= rowIndex; i++) {
    const row = [1];
    for (let j = 0; j < prev.length - 1; j++) {
      row.push(prev[j] + prev[j + 1]);
    }
    row.push(1);
    prev = row;
  }

  return prev;
};

var rowIndex = 3;
var expected = [1, 3, 3, 1];
var result = getRow(rowIndex);
console.log(result, result.join() === expected.join());

var rowIndex = 0;
var expected = [1];
var result = getRow(rowIndex);
console.log(result, result.join() === expected.join());

var rowIndex = 1;
var expected = [1, 1];
var result = getRow(rowIndex);
console.log(result, result.join() === expected.join());

var rowIndex = 10;
var expected = [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1];
var result = getRow(rowIndex);
console.log(result, result.join() === expected.join());
