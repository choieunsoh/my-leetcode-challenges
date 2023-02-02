// 1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  function gcd(a, b) {
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  function isConcatenation(str, len) {
    let j = 0;
    for (const c of str) {
      if (c !== str1[j % len]) return false;
      j++;
    }
    return true;
  }

  const len = gcd(str1.length, str2.length);
  if (isConcatenation(str1, len) && isConcatenation(str2, len)) {
    return str1.substring(0, len);
  }

  return '';
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
