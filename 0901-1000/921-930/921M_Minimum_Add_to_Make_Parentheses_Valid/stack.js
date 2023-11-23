// 921. Minimum Add to Make Parentheses Valid
// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  const stack = [];
  for (const c of s) {
    if (c === ')') {
      const top = stack[stack.length - 1];
      if (top === '(') {
        stack.pop();
        continue;
      }
    }
    stack.push(c);
  }
  return stack.length;
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
