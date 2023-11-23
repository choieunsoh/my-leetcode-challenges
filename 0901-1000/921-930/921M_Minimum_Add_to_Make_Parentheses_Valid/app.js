// 921. Minimum Add to Make Parentheses Valid
// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let left = 0;
  let right = 0;
  for (const c of s) {
    if (c === ')') {
      if (left === 0) {
        right++;
      } else {
        left--;
      }
    } else {
      left++;
    }
  }
  return left + right;
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
