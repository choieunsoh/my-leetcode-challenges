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

  const charsInSection = 2 * (numRows - 1);
  let result = '';
  for (let row = 0; row < numRows; row++) {
    let index = row;
    while (index < n) {
      result += s[index];
      if (row !== 0 && row !== numRows - 1) {
        const charsInBetween = charsInSection - 2 * row;
        const betweenIndex = index + charsInBetween;
        if (betweenIndex < n) {
          result += s[betweenIndex];
        }
      }
      index += charsInSection;
    }
  }

  return result;
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
