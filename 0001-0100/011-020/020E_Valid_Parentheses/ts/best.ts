// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
var isValid = function (s: string): boolean {
  const stack: string[] = [];
  let lastIndex = -1;
  for (const char of s) {
    if (char === '{') stack[++lastIndex] = '}';
    else if (char === '(') stack[++lastIndex] = ')';
    else if (char === '[') stack[++lastIndex] = ']';
    else {
      if (lastIndex < 0 || char !== stack[lastIndex]) {
        return false;
      }
      lastIndex--;
    }
  }
  return lastIndex === -1;
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
