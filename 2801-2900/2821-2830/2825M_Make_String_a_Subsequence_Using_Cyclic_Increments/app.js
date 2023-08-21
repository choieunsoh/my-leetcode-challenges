// 2825. Make String a Subsequence Using Cyclic Increments
// https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
  const n = str1.length;
  const m = str2.length;
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    const code1 = str1.charCodeAt(i++);
    const code2 = str2.charCodeAt(j);
    if (code1 === code2 || code1 + 1 === code2 || code1 - 25 === code2) {
      j++;
    }
  }
  return j === m;
};

var str1 = 'abc',
  str2 = 'ad';
var expected = true;
var result = canMakeSubsequence(str1, str2);
console.log(result, result === expected);

var str1 = 'zc',
  str2 = 'ad';
var expected = true;
var result = canMakeSubsequence(str1, str2);
console.log(result, result === expected);

var str1 = 'ab',
  str2 = 'd';
var expected = false;
var result = canMakeSubsequence(str1, str2);
console.log(result, result === expected);
