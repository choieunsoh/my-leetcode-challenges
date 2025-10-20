// 2299. Strong Password Checker II
// https://leetcode.com/problems/strong-password-checker-ii/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  if (password.length < 8) return false;

  const specialChars = new Set('!@#$%^&*()-+');
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  let hasSpecial = false;
  let prevChar = '';
  for (const char of password) {
    if (char === prevChar) return false;
    prevChar = char;
    if (!hasLower && char >= 'a' && char <= 'z') {
      hasLower = true;
    } else if (!hasUpper && char >= 'A' && char <= 'Z') {
      hasUpper = true;
    } else if (!hasDigit && char >= '0' && char <= '9') {
      hasDigit = true;
    } else if (!hasSpecial && specialChars.has(char)) {
      hasSpecial = true;
    }
  }

  if (!hasLower || !hasUpper || !hasDigit || !hasSpecial) {
    return false;
  }
  return true;
};

var password = 'IloveLe3tcode!';
var expected = true;
var result = strongPasswordCheckerII(password);
console.log(result, result === expected);

var password = 'Me+You--IsMyDream';
var expected = false;
var result = strongPasswordCheckerII(password);
console.log(result, result === expected);

var password = '1aB!';
var expected = false;
var result = strongPasswordCheckerII(password);
console.log(result, result === expected);
