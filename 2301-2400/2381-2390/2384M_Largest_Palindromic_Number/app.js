// 2384. Largest Palindromic Number
// https://leetcode.com/problems/largest-palindromic-number/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
  const counts = new Array(10).fill(0);
  for (const digit of num) {
    counts[digit]++;
  }

  let prefix = '';
  let suffix = '';
  let middle = '';
  for (let i = 9; i >= 0; i--) {
    if (counts[i] === 0 || (prefix === '' && i === 0)) continue;

    const digit = String(i);
    const half = counts[i] >> 1;
    const repeatedDigit = digit.repeat(half);

    prefix += repeatedDigit;
    suffix = repeatedDigit + suffix;
    if (counts[i] % 2 === 1) {
      if (digit > middle) {
        middle = digit;
      }
    }
  }
  return prefix + middle + suffix || '0';
};

var num = '444947137';
var expected = '7449447';
var result = largestPalindromic(num);
console.log(result, result === expected);

var num = '00009';
var expected = '9';
var result = largestPalindromic(num);
console.log(result, result === expected);

var num = '1';
var expected = '1';
var result = largestPalindromic(num);
console.log(result, result === expected);

var num = '911';
var expected = '191';
var result = largestPalindromic(num);
console.log(result, result === expected);

var num = '1234567890987654321';
var expected = '9876543210123456789';
var result = largestPalindromic(num);
console.log(result, result === expected);

var num = '111222';
var expected = '21212';
var result = largestPalindromic(num);
console.log(result, result === expected);

var num = '1112';
var expected = '121';
var result = largestPalindromic(num);
console.log(result, result === expected);

var num = '0000';
var expected = '0';
var result = largestPalindromic(num);
console.log(result, result === expected);
