// https://leetcode.com/problems/excel-sheet-column-title/
// 168. Excel Sheet Column Title
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let title = '';
  columnNumber--;
  while (columnNumber >= 0) {
    const charIndex = columnNumber % 26;
    title = toChar(charIndex) + title;
    columnNumber = Math.floor(columnNumber / 26) - 1;
  }

  function toChar(index) {
    return String.fromCharCode(index + 65);
  }

  return title;
};

var columnNumber = 1;
var expected = 'A';
var result = convertToTitle(columnNumber);
console.log(result, result === expected);

var columnNumber = 28;
var expected = 'AB';
var result = convertToTitle(columnNumber);
console.log(result, result === expected);

var columnNumber = 701;
var expected = 'ZY';
var result = convertToTitle(columnNumber);
console.log(result, result === expected);

var columnNumber = 702;
var expected = 'ZZ';
var result = convertToTitle(columnNumber);
console.log(result, result === expected);

var columnNumber = 703;
var expected = 'AAA';
var result = convertToTitle(columnNumber);
console.log(result, result === expected);

var columnNumber = 705;
var expected = 'AAC';
var result = convertToTitle(columnNumber);
console.log(result, result === expected);
