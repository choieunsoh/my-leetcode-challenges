// 2131. Longest Palindrome by Concatenating Two Letter Words
// https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  let longest = 0;
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const reverseWord = word[1] + word[0];
    const reverseCount = map.get(reverseWord) ?? 0;
    if (reverseCount > 0) {
      if (reverseCount - 1 === 0) {
        map.delete(reverseWord);
      } else {
        map.set(reverseWord, reverseCount - 1);
      }
      longest += 4;
    } else {
      const count = map.get(word) ?? 0;
      map.set(word, count + 1);
    }
  }

  for (const [word, count] of map) {
    if (word[0] === word[1] && count > 0) {
      return longest + 2;
    }
  }

  return longest;
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
