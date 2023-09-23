// 1048. Longest String Chain
// https://leetcode.com/problems/longest-string-chain/
/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  let result = 0;
  const memo = new Map();
  const seenWords = new Set(words);
  for (const word of words) {
    result = Math.max(result, dfs(word, memo, seenWords));
  }

  return result;

  function dfs(word, memo, seenWords) {
    if (memo.has(word)) {
      return memo.get(word);
    }

    let maxLength = 1;
    for (let i = 0; i < word.length; i++) {
      const newWord = word.substring(0, i) + word.substring(i + 1);
      if (seenWords.has(newWord)) {
        const currentLength = 1 + dfs(newWord, memo, seenWords);
        maxLength = Math.max(maxLength, currentLength);
      }
    }

    memo.set(word, maxLength);
    return maxLength;
  }
};

var words = ['a', 'b', 'ba', 'bca', 'bda', 'bdca'];
var expected = 4;
var result = longestStrChain(words);
console.log(result, result === expected);

var words = ['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc'];
var expected = 5;
var result = longestStrChain(words);
console.log(result, result === expected);

var words = ['abcd', 'dbqca'];
var expected = 1;
var result = longestStrChain(words);
console.log(result, result === expected);
