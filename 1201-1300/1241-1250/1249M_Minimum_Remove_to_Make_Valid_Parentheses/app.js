// 1249. Minimum Remove to Make Valid Parentheses
// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  s = s.split('');
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        s[i] = '';
      }
    }
  }

  for (const i of stack) {
    s[i] = '';
  }
  return s.join('');
};

var s = 'lee(t(c)o)de)';
var expected = 'lee(t(c)o)de';
var result = minRemoveToMakeValid(s);
console.log(result, result === expected);

var s = 'a)b(c)d';
var expected = 'ab(c)d';
var result = minRemoveToMakeValid(s);
console.log(result, result === expected);

var s = '))((';
var expected = '';
var result = minRemoveToMakeValid(s);
console.log(result, result === expected);
