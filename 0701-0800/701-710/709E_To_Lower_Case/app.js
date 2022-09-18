// https://leetcode.com/problems/to-lower-case/
// 709. To Lower Case
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'A' && s[i] <= 'Z') {
      result += String.fromCharCode(s.charCodeAt(i) + 32);
    } else {
      result += s[i];
    }
  }
  return result;
};

var s = 'Hello';
var expected = 'hello';
var result = toLowerCase(s);
console.log(result, result === expected);

var s = 'here';
var expected = 'here';
var result = toLowerCase(s);
console.log(result, result === expected);

var s = 'LOVELY';
var expected = 'lovely';
var result = toLowerCase(s);
console.log(result, result === expected);
