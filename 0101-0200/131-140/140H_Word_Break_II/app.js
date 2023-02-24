// 140. Word Break II
// https://leetcode.com/problems/word-break-ii/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const result = [];
  const words = new Set(wordDict);
  function dfs(i, sentences) {
    if (i === s.length) {
      result.push(sentences.join(' '));
      return;
    }

    for (let j = i; j < s.length; j++) {
      const word = s.substring(i, j + 1);
      if (words.has(word)) {
        dfs(j + 1, [...sentences, word]);
      }
    }
  }

  dfs(0, []);
  return result;
};

function compare(a, b) {
  a.sort((a, b) => (a < b ? -1 : 1));
  b.sort((a, b) => (a < b ? -1 : 1));
  return a.join() === b.join();
}

var s = 'catsanddog',
  wordDict = ['cat', 'cats', 'and', 'sand', 'dog'];
var expected = ['cats and dog', 'cat sand dog'];
var result = wordBreak(s, wordDict);
console.log(result, compare(result, expected));

var s = 'pineapplepenapple',
  wordDict = ['apple', 'pen', 'applepen', 'pine', 'pineapple'];
var expected = ['pine apple pen apple', 'pineapple pen apple', 'pine applepen apple'];
var result = wordBreak(s, wordDict);
console.log(result, compare(result, expected));

var s = 'catsandog',
  wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
var expected = [];
var result = wordBreak(s, wordDict);
console.log(result, compare(result, expected));
