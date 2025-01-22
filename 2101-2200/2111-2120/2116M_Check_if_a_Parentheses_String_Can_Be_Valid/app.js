// 2116. Check if a Parentheses String Can Be Valid
// https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  const n = s.length;
  if (n % 2 === 1) return false;

  const openBrackets = [];
  const unlocked = [];
  for (let i = 0; i < n; i++) {
    if (locked[i] === '0') {
      unlocked.push(i);
    } else if (s[i] === '(') {
      openBrackets.push(i);
    } else if (s[i] === ')') {
      if (openBrackets.length > 0) {
        openBrackets.pop();
      } else if (unlocked.length > 0) {
        unlocked.pop();
      } else {
        return false;
      }
    }
  }

  while (openBrackets.length > 0 && unlocked.length > 0 && openBrackets.at(-1) < unlocked.at(-1)) {
    openBrackets.pop();
    unlocked.pop();
  }

  if (openBrackets.length > 0) return false;

  return true;
};

var s = '))()))',
  locked = '010100';
var expected = true;
var result = canBeValid(s, locked);
console.log(result, result === expected);

var s = '()()',
  locked = '0000';
var expected = true;
var result = canBeValid(s, locked);
console.log(result, result === expected);

var s = ')',
  locked = '0';
var expected = false;
var result = canBeValid(s, locked);
console.log(result, result === expected);

var s = '(',
  locked = '0';
var expected = false;
var result = canBeValid(s, locked);
console.log(result, result === expected);

var s = '()',
  locked = '11';
var expected = true;
var result = canBeValid(s, locked);
console.log(result, result === expected);

var s = '()))',
  locked = '0010';
var expected = true;
var result = canBeValid(s, locked);
console.log(result, result === expected);

var s = '((())(((()()',
  locked = '100000111010';
var expected = false;
var result = canBeValid(s, locked);
console.log(result, result === expected);

var s = '()()()()(((()(',
  locked = '10000000000001';
var expected = false;
var result = canBeValid(s, locked);
console.log(result, result === expected);

var s = '))()()()(((())',
  locked = '10000000000001';
var expected = false;
var result = canBeValid(s, locked);
console.log(result, result === expected);

var s = '((()(()()))()((()()))))(((()(()',
  locked = '1011110010010100111010000001001';
var expected = false;
var result = canBeValid(s, locked);
console.log(result, result === expected);

var s = '())(()(()(())()())(())((())(()())((())))))(((((((())(()))))(',
  locked = '100011110110011011010111100111011101111110000101001101001111';
var expected = false;
var result = canBeValid(s, locked);
console.log(result, result === expected);

var s = ')(',
  locked = '11';
var expected = false;
var result = canBeValid(s, locked);
console.log(result, result === expected);

var s = ')(',
  locked = '00';
var expected = true;
var result = canBeValid(s, locked);
console.log(result, result === expected);
