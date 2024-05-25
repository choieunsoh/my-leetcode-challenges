// 140. Word Break II
// https://leetcode.com/problems/word-break-ii/
// T.C.: O(2^n)
// S.C.: O(2^n)
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const words = new Set(wordDict);
  const dp = new Map();
  for (let start = s.length; start >= 0; start--) {
    const sentences = [];
    for (let end = start; end < s.length; end++) {
      const word = s.substring(start, end + 1);
      if (words.has(word)) {
        if (end === s.length - 1) {
          sentences.push(word);
        } else {
          const nextWords = dp.get(end + 1) ?? [];
          for (const nextWord of nextWords) {
            sentences.push(word + ' ' + nextWord);
          }
        }
      }
    }
    dp.set(start, sentences);
  }
  return dp.get(0) ?? [];
};

var s = 'catsanddog',
  wordDict = ['cat', 'cats', 'and', 'sand', 'dog'];
var expected = ['cats and dog', 'cat sand dog'];
var result = wordBreak(s, wordDict);
console.log(result, result.sort().join() === expected.sort().join());

var s = 'pineapplepenapple',
  wordDict = ['apple', 'pen', 'applepen', 'pine', 'pineapple'];
var expected = ['pine apple pen apple', 'pineapple pen apple', 'pine applepen apple'];
var result = wordBreak(s, wordDict);
console.log(result, result.sort().join() === expected.sort().join());

var s = 'catsandog',
  wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
var expected = [];
var result = wordBreak(s, wordDict);
console.log(result, result.sort().join() === expected.sort().join());
