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
  const result = [];
  const words = new Set(wordDict);
  dfs(0, []);
  return result;

  function dfs(start, sentences) {
    if (start === s.length) {
      result.push(sentences.join(' '));
      return;
    }

    for (let end = start; end < s.length; end++) {
      const word = s.substring(start, end + 1);
      if (words.has(word)) {
        sentences.push(word);
        dfs(end + 1, sentences);
        sentences.pop();
      }
    }
  }
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
