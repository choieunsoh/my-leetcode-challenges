// 119. Pascal's Triangle II
// https://leetcode.com/problems/pascals-triangle-ii/
var getRow = function (rowIndex: number): number[] {
  if (rowIndex === 0) return [1];
  let result = [1];
  for (let i = 1; i <= rowIndex; i++) {
    const row = Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      row[j] = result[j - 1] + result[j];
    }
    result = row;
  }
  return result;
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
