// 1694. Reformat Phone Number
// https://leetcode.com/problems/reformat-phone-number/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  const digits = number.replace(/\D/g, '');
  const len = digits.length;
  if (len <= 3) return digits;

  const remain = len % 3;
  const offset = remain === 1 ? 4 : 0;
  const result = [];
  let i = 0;
  while (i < len - offset) {
    result.push(digits.slice(i, i + 3));
    i += 3;
  }

  if (remain === 1) {
    result.push(digits.slice(i, i + 2));
    result.push(digits.slice(i + 2, i + 4));
  }
  return result.join('-');
};

var number = '1-23-45 6';
var expected = '123-456';
var result = reformatNumber(number);
console.log(result, result === expected);

var number = '123 4-567';
var expected = '123-45-67';
var result = reformatNumber(number);
console.log(result, result === expected);

var number = '123 4-5678';
var expected = '123-456-78';
var result = reformatNumber(number);
console.log(result, result === expected);
