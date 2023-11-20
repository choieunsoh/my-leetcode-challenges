// 1614. Maximum Nesting Depth of the Parentheses
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let result = 0;
  let count = 0;
  for (const c of s) {
    if (c === '(') {
      result = Math.max(result, ++count);
    } else if (c === ')') {
      count--;
    }
  }
  return result;
};

var s = '(1+(2*3)+((8)/4))+1';
var expected = 3;
var result = maxDepth(s);
console.log(result, result === expected);

var s = '(1)+((2))+(((3)))';
var expected = 3;
var result = maxDepth(s);
console.log(result, result === expected);
