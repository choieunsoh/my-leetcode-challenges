// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pairs = new Map([
    ['{', '}'],
    ['(', ')'],
    ['[', ']'],
  ]);

  const stack = [];
  for (const ch of s) {
    if (pairs.has(ch)) {
      stack.push(pairs.get(ch));
    } else if (stack.pop() !== ch) {
      return false;
    }
  }
  return stack.length === 0;
};

var s = '{{}[][[[]]]}';
var expected = true;
var result = isValid(s);
console.log(result, result === expected);

var s = '()';
var expected = true;
var result = isValid(s);
console.log(result, result === expected);

var s = '()[]{}';
var expected = true;
var result = isValid(s);
console.log(result, result === expected);

var s = '(]';
var expected = false;
var result = isValid(s);
console.log(result, result === expected);
