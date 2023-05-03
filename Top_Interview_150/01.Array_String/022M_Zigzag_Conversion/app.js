// 6. Zigzag Conversion
// https://leetcode.com/problems/zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const n = s.length;
  if (numRows === 1 || n <= numRows) return s;

  const result = new Array(numRows).fill('');
  let dir = 1;
  let row = 0;
  for (const ch of s) {
    result[row] += ch;
    if (row === numRows - 1) dir = -1;
    else if (row === 0) dir = 1;
    row += dir;
  }

  return result.join('');
};

var s = 'PAYPALISHIRING',
  numRows = 3;
var expected = 'PAHNAPLSIIGYIR';
var result = convert(s, numRows);
console.log(result, expected === result);

var s = 'PAYPALISHIRING',
  numRows = 4;
var expected = 'PINALSIGYAHRPI';
var result = convert(s, numRows);
console.log(result, expected === result);

var s = 'ABCDEF',
  numRows = 6;
var expected = 'ABCDEF';
var result = convert(s, numRows);
console.log(result, expected === result);
