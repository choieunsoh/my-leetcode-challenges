// 709. To Lower Case
// https://leetcode.com/problems/to-lower-case/
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let result = '';
  const a = 'a'.charCodeAt(0);
  const A = 'A'.charCodeAt(0);
  const diff = a - A;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'A' && s[i] <= 'Z') {
      result += String.fromCharCode(s.charCodeAt(i) + diff);
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
