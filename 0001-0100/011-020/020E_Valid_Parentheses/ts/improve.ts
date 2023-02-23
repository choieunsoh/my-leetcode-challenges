// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
var isValid = function (s: string): boolean {
  const openingBrackets = new Set(['(', '[', '{']);

  const arr: string[] = [];
  let lastIndex = -1;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (openingBrackets.has(char)) {
      arr[++lastIndex] = char;
    } else {
      switch (char) {
        case ')':
          if (lastIndex < 0 || arr[lastIndex] !== '(') {
            return false;
          }
          lastIndex--;
          break;
        case ']':
          if (lastIndex < 0 || arr[lastIndex] !== '[') {
            return false;
          }
          lastIndex--;
          break;
        case '}':
          if (lastIndex < 0 || arr[lastIndex] !== '{') {
            return false;
          }
          lastIndex--;
          break;
        default:
          return false;
      }
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
