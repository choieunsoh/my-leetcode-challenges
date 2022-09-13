// https://leetcode.com/problems/number-of-segments-in-a-string/
// 434. Number of Segments in a String
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  s += ' ';
  let count = 0;
  let index = 0;
  while (index < s.length) {
    if (s[index] !== ' ' && s[index + 1] === ' ') {
      count++;
    }
    index++;
  }

  return count;
};

var s = 'Hello, my name is John';
var expected = 5;
var result = countSegments(s);
console.log(result, expected, result === expected);

var s = 'Hello';
var expected = 1;
var result = countSegments(s);
console.log(result, expected, result === expected);

var s = 'Hello   Words';
var expected = 2;
var result = countSegments(s);
console.log(result, expected, result === expected);

var s = ' ';
var expected = 0;
var result = countSegments(s);
console.log(result, expected, result === expected);
