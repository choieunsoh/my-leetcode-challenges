// https://leetcode.com/problems/number-of-lines-to-write-string/
// 806. Number of Lines To Write String
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let lines = 1;
  let lineWidth = 0;
  for (let i = 0; i < s.length; i++) {
    let charWidth = widths[s.charCodeAt(i) - 97];
    if (lineWidth + charWidth > 100) {
      lines++;
      lineWidth = charWidth;
    } else {
      lineWidth += charWidth;
    }
  }
  return [lines, lineWidth];
};

var widths = [
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10,
  ],
  s = 'abcdefghijklmnopqrstuvwxyz';
var expected = [3, 60];
var actual = numberOfLines(widths, s);
console.log(actual, actual.join() === expected.join());

var widths = [
    4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10,
  ],
  s = 'bbbcccdddaaa';
var expected = [2, 4];
var actual = numberOfLines(widths, s);
console.log(actual, actual.join() === expected.join());
