// 856. Score of Parentheses
// https://leetcode.com/problems/score-of-parentheses/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  const stack = [0];
  for (const c of s) {
    if (c === '(') {
      stack.push(0);
    } else {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a + Math.max(1, 2 * b));
    }
  }
  return stack.pop();
};

var s = '()';
var expected = 1;
var result = scoreOfParentheses(s);
console.log(result, result === expected);

var s = '(())';
var expected = 2;
var result = scoreOfParentheses(s);
console.log(result, result === expected);

var s = '()()';
var expected = 2;
var result = scoreOfParentheses(s);
console.log(result, result === expected);
