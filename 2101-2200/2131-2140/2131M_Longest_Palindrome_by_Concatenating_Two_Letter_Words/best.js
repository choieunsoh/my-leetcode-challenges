// 2131. Longest Palindrome by Concatenating Two Letter Words
// https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  const S = 5;
  const M = (1 << S) - 1;
  const freq = new Array(1 << (S << 1)).fill(0);
  for (const s of words) {
    freq[((s.charCodeAt(0) & M) << S) | (s.charCodeAt(1) & M)]++;
  }

  let result = 0;
  let mid = 0;
  for (let i = 1; i <= 26; i++) {
    const dupe = freq[(i << S) | i];
    result += dupe >> 1;
    mid |= dupe & 1;
    for (let j = i + 1; j <= 26; j++) {
      result += Math.min(freq[(i << S) | j], freq[(j << S) | i]);
    }
  }
  return (result << 2) | (mid << 1);
};

var words = ['lc', 'cl', 'gg'];
var expected = 6;
var result = longestPalindrome(words);
console.log(result, result === expected);

var words = ['ab', 'ty', 'yt', 'lc', 'cl', 'ab'];
var expected = 8;
var result = longestPalindrome(words);
console.log(result, result === expected);

var words = ['cc', 'll', 'xx'];
var expected = 2;
var result = longestPalindrome(words);
console.log(result, result === expected);

var words = ['dd', 'aa', 'bb', 'dd', 'aa', 'dd', 'bb', 'dd', 'aa', 'cc', 'bb', 'cc', 'dd', 'cc'];
var expected = 22;
var result = longestPalindrome(words);
console.log(result, result === expected);
