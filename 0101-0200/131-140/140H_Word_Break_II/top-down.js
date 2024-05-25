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
  const memo = new Map();
  return dfs(s);

  function dfs(remainingStr) {
    if (memo.has(remainingStr)) {
      return memo.get(remainingStr);
    }

    if (remainingStr === '') {
      return [''];
    }

    const result = [];
    for (let i = 1; i <= remainingStr.length; i++) {
      const word = remainingStr.substring(0, i);
      if (words.has(word)) {
        const nextRemainingStr = remainingStr.substring(i);
        const nextWords = dfs(nextRemainingStr);
        for (const nextWord of nextWords) {
          const sentence = nextWord !== '' ? word + ' ' + nextWord : word;
          result.push(sentence);
        }
      }
    }

    memo.set(remainingStr, result);
    return result;
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
