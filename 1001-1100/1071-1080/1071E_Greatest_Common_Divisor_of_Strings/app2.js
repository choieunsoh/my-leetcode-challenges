// 1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/
// T.C.: O(min(m,n)*(m+n))
// S.C.: O(min(m,n))
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  for (let i = Math.min(len1, len2); i >= 1; i--) {
    if (valid(str1, str2, i)) {
      return str1.substring(0, i);
    }
  }
  return '';

  function valid(str1, str2, k) {
    const len1 = str1.length;
    const len2 = str2.length;
    if (len1 % k > 0 || len2 % k > 0) {
      return false;
    } else {
      const base = str1.substring(0, k);
      return str1.split(base).join('') === '' && str2.split(base).join('') === '';
    }
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
