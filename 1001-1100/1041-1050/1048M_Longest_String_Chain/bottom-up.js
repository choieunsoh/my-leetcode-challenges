// 1048. Longest String Chain
// https://leetcode.com/problems/longest-string-chain/
/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  let result = 0;
  const dp = new Map();
  words.sort((a, b) => (a.length === b.length ? a.localeCompare(b) : a.length - b.length));
  for (const word of words) {
    let currentLength = 1;
    for (let i = 0; i < word.length; i++) {
      const predecessorWord = word.substring(0, i) + word.substring(i + 1);
      const previousLength = dp.get(predecessorWord) ?? 0;
      currentLength = Math.max(currentLength, previousLength + 1);
    }
    dp.set(word, currentLength);
    result = Math.max(result, currentLength);
  }

  return result;
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
