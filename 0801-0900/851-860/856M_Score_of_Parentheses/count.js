// 856. Score of Parentheses
// https://leetcode.com/problems/score-of-parentheses/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  let result = 0;
  let bal = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') {
      bal++;
    } else {
      bal--;
      if (s.charAt(i - 1) === '(') {
        result += 1 << bal;
      }
    }
  }

  return result;
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
