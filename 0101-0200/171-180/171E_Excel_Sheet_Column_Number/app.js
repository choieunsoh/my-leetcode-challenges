// https://leetcode.com/problems/excel-sheet-column-number/
// 171. Excel Sheet Column Number
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let num = 0;
  let base = 26 ** (columnTitle.length - 1);
  for (let i = 0; i < columnTitle.length; i++) {
    const char = columnTitle.charCodeAt(i) - 64;
    num += char * base;
    base /= 26;
  }
  return num;
};

var columnTitle = 'A';
var expected = 1;
var result = titleToNumber(columnTitle);
console.log(result, expected, result === expected);

var columnTitle = 'AB';
var expected = 28;
var result = titleToNumber(columnTitle);
console.log(result, expected, result === expected);

var columnTitle = 'ZY';
var expected = 701;
var result = titleToNumber(columnTitle);
console.log(result, expected, result === expected);

var columnTitle = 'ZZ';
var expected = 702;
var result = titleToNumber(columnTitle);
console.log(result, expected, result === expected);

var columnTitle = 'AAA';
var expected = 703;
var result = titleToNumber(columnTitle);
console.log(result, expected, result === expected);

var columnTitle = 'AAC';
var expected = 705;
var result = titleToNumber(columnTitle);
console.log(result, expected, result === expected);
