// 1930. Unique Length-3 Palindromic Subsequences
// https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  let result = 0;
  const chars = new Set(s);
  for (const char of chars) {
    let start = -1;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) !== char) continue;
      if (start === -1) start = i;
      end = i;
    }

    const unique = new Set();
    for (let i = start + 1; i < end; i++) {
      unique.add(s.charAt(i));
    }
    result += unique.size;
  }
  return result;
};

var s = 'aabca';
var expected = 3;
var result = countPalindromicSubsequence(s);
console.log(result, result === expected);

var s = 'adc';
var expected = 0;
var result = countPalindromicSubsequence(s);
console.log(result, result === expected);

var s = 'bbcbaba';
var expected = 4;
var result = countPalindromicSubsequence(s);
console.log(result, result === expected);

var s = 'abdfafa';
var expected = 5;
var result = countPalindromicSubsequence(s);
console.log(result, result === expected);
