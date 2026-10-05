// 856. Score of Parentheses
// https://leetcode.com/problems/score-of-parentheses/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  return f(s, 0, s.length);

  function f(s, i, j) {
    //Score of balanced string S[i:j]
    let ans = 0;
    let bal = 0;

    // Split string into primitives
    for (let k = i; k < j; k++) {
      bal += s.charAt(k) === '(' ? 1 : -1;
      if (bal === 0) {
        if (k - i === 1) {
          ans++;
        } else {
          ans += 2 * f(s, i + 1, k);
        }
        i = k + 1;
      }
    }
    return ans;
  }
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
