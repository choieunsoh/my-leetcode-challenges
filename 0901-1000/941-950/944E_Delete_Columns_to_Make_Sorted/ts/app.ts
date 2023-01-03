// https://leetcode.com/problems/delete-columns-to-make-sorted/
// 944. Delete Columns to Make Sorted
var minDeletionSize = function (strs: string[]): number {
  let deleteCount = 0;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] < strs[j - 1][i]) {
        deleteCount++;
        break;
      }
    }
  }
  return deleteCount;
};

var strs = ['cba', 'daf', 'ghi'];
var expected = 1;
var result = minDeletionSize(strs);
console.log(result, expected, result === expected);

var strs = ['a', 'b'];
var expected = 0;
var result = minDeletionSize(strs);
console.log(result, expected, result === expected);

var strs = ['zyx', 'wvu', 'tsr'];
var expected = 3;
var result = minDeletionSize(strs);
console.log(result, expected, result === expected);

var strs = ['abcdef'];
var expected = 0;
var result = minDeletionSize(strs);
console.log(result, expected, result === expected);

var strs = ['a'];
var expected = 0;
var result = minDeletionSize(strs);
console.log(result, expected, result === expected);

var strs = ['a', 'b', 'd', 'c'];
var expected = 1;
var result = minDeletionSize(strs);
console.log(result, expected, result === expected);

var strs = ['rrjk', 'furt', 'guzm'];
var expected = 2;
var result = minDeletionSize(strs);
console.log(result, expected, result === expected);
