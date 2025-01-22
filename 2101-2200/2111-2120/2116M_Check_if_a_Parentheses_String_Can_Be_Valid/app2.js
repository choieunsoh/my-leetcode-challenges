// 2116. Check if a Parentheses String Can Be Valid
// https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  const n = s.length;
  if (n % 2 === 1) return false;

  let openBrackets = 0;
  let unlocked = 0;
  for (let i = 0; i < n; i++) {
    if (locked[i] === '0') {
      unlocked++;
    } else if (s[i] === '(') {
      openBrackets++;
    } else if (s[i] === ')') {
      if (openBrackets > 0) {
        openBrackets--;
      } else if (unlocked > 0) {
        unlocked--;
      } else {
        return false;
      }
    }
  }

  // Match remaining open brackets with unlocked characters.
  let balance = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (locked[i] === '0') {
      balance--;
      unlocked--;
    } else if (s[i] === '(') {
      balance++;
      openBrackets--;
    } else if (s[i] === ')') {
      balance--;
    }

    if (balance > 0) return false;

    if (unlocked === 0 && openBrackets === 0) {
      break;
    }
  }

  if (openBrackets > 0) return false;

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
