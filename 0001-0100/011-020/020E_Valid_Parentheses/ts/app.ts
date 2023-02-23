// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
var isValid = function (s: string): boolean {
  const map: { [key: string]: string } = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const stack: string[] = [];
  for (const c of s) {
    if (map[c]) {
      stack.push(c);
    } else if (map[stack.pop()!] !== c) {
      return false;
    }
  }
  return stack.length === 0;
};

var s = ']';
var expected = false;
var result = isValid(s);
console.log(result, result === expected);

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
