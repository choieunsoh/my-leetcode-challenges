// 2716. Minimize String Length
// https://leetcode.com/problems/minimize-string-length/
/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
  const chars = new Set([...s]);
  return chars.size;
};

var s = 'aaabc';
var expected = 3;
var result = minimizedStringLength(s);
console.log(result, result === expected);

var s = 'cbbd';
var expected = 3;
var result = minimizedStringLength(s);
console.log(result, result === expected);

var s = 'dddaaa';
var expected = 2;
var result = minimizedStringLength(s);
console.log(result, result === expected);
