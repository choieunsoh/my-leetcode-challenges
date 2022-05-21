// https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const chars = '0123456789';
  let index = 0;
  while (index < s.length && s[index] === ' ') index++;

  let sign = 1;
  if (s[index] === '-') {
    sign = -1;
    index++;
  } else if (s[index] === '+') {
    index++;
  }

  let result = 0;
  while (index < s.length && chars.includes(s[index])) {
    result = result * 10 + Number(s[index]);
    index++;
  }

  result *= sign;
  if (result < (-2) ** 31) {
    return (-2) ** 31;
  }

  if (result > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  }

  return result;
};

var s = '21474836460';
console.log(s, myAtoi(s));
var s = '42';
console.log(s, myAtoi(s));
var s = '   -42';
console.log(s, myAtoi(s));
var s = '4193 with words';
console.log(s, myAtoi(s));
var s = '-42-';
console.log(s, myAtoi(s));
var s = '++42';
console.log(s, myAtoi(s));
var s = '+-42';
console.log(s, myAtoi(s));
var s = '-+42';
console.log(s, myAtoi(s));
var s = '--42';
console.log(s, myAtoi(s));
var s = 'word 42';
console.log(s, myAtoi(s));
