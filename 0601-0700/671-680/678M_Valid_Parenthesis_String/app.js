// 678. Valid Parenthesis String
// https://leetcode.com/problems/valid-parenthesis-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let openCount = 0;
  let closeCount = 0;
  const LEFT = '(*';
  const RIGHT = ')*';
  for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
    openCount += LEFT.includes(s[i]) ? 1 : -1;
    closeCount += RIGHT.includes(s[j]) ? 1 : -1;
    if (openCount < 0 || closeCount < 0) {
      return false;
    }
  }
  return true;
};

var s = '()';
var expected = true;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '(*)';
var expected = true;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '(*))';
var expected = true;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '(**)';
var expected = true;
var result = checkValidString(s);
console.log(result, result === expected);

var s = ')()(';
var expected = false;
var result = checkValidString(s);
console.log(result, result === expected);

var s = ')()';
var expected = false;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '()(';
var expected = false;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '()()((';
var expected = false;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '(';
var expected = false;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '*';
var expected = true;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '**';
var expected = true;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '***';
var expected = true;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '(**)';
var expected = true;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '(***)';
var expected = true;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '(***';
var expected = true;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '((**)';
var expected = true;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '(**))';
var expected = true;
var result = checkValidString(s);
console.log(result, result === expected);

var s = '(**()';
var expected = true;
var result = checkValidString(s);
console.log(result, result === expected);
