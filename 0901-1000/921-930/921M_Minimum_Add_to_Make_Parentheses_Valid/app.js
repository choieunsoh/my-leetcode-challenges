// 921. Minimum Add to Make Parentheses Valid
// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let openBrackets = 0;
  let minAddsRequired = 0;
  for (const c of s) {
    if (c === ')') {
      if (openBrackets === 0) {
        minAddsRequired++;
      } else {
        openBrackets--;
      }
    } else {
      openBrackets++;
    }
  }
  return openBrackets + minAddsRequired;
};

var s = '())';
var expected = 1;
var result = minAddToMakeValid(s);
console.log(result, result === expected);

var s = '(((';
var expected = 3;
var result = minAddToMakeValid(s);
console.log(result, result === expected);

var s = ')))';
var expected = 3;
var result = minAddToMakeValid(s);
console.log(result, result === expected);

var s = ')((';
var expected = 3;
var result = minAddToMakeValid(s);
console.log(result, result === expected);

var s = ')()';
var expected = 1;
var result = minAddToMakeValid(s);
console.log(result, result === expected);

var s = '))(()';
var expected = 3;
var result = minAddToMakeValid(s);
console.log(result, result === expected);
