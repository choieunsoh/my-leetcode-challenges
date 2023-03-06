// 2131. Longest Palindrome by Concatenating Two Letter Words
// https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/
/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  const a = 'a'.charCodeAt(0);
  const map = Array.from({ length: 26 }, () => Array(26).fill(0));
  for (const word of words) {
    const i = word.charCodeAt(0) - a;
    const j = word.charCodeAt(1) - a;
    map[i][j]++;
  }

  let pairs = 0;
  let center = 0;
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      const count = map[i][j];
      if (i == j) {
        pairs += count >> 1;
        center ||= count & 1;
      } else {
        const reverseCount = map[j][i];
        pairs += Math.min(count, reverseCount);
      }
      map[i][j] = 0;
    }
  }

  return 2 * (pairs * 2 + center);
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
