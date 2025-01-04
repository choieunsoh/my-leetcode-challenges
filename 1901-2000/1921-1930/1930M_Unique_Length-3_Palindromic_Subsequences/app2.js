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
  const first = new Array(26).fill(-1);
  const last = new Array(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    const charIndex = s.charCodeAt(i) - a;
    if (first[charIndex] === -1) {
      first[charIndex] = i;
    }
    last[charIndex] = i;
  }

  for (let charIndex = 0; charIndex < 26; charIndex++) {
    if (first[charIndex] === -1) {
      continue;
    }

    const between = new Set();
    for (let betweenIndex = first[charIndex] + 1; betweenIndex < last[charIndex]; betweenIndex++) {
      between.add(s.charAt(betweenIndex));
    }

    result += between.size;
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
