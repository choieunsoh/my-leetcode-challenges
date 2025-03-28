// 1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/
// T.C.: O(m+n)
// S.C.: O(m+n)
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  const len = gcd(str1.length, str2.length);
  return str1.substring(0, len);

  function gcd(a, b) {
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  }
};

var str1 = 'ABCABC',
  str2 = 'ABC';
var expected = 'ABC';
var result = gcdOfStrings(str1, str2);
console.log(result, result === expected);

var str1 = 'ABABAB',
  str2 = 'ABAB';
var expected = 'AB';
var result = gcdOfStrings(str1, str2);
console.log(result, result === expected);

var str1 = 'LEET',
  str2 = 'CODE';
var expected = '';
var result = gcdOfStrings(str1, str2);
console.log(result, result === expected);
