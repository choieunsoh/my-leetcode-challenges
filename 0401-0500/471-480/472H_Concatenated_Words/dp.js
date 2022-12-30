// 472. Concatenated Words
// https://leetcode.com/problems/concatenated-words/
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  const dict = new Set(words);
  const result = [];
  for (const word of words) {
    const length = word.length;
    const dp = Array(length + 1).fill(false);
    dp[0] = true;
    for (let right = 1; right <= length; right++) {
      const start = right === length ? 1 : 0;
      for (let left = start; left < right; left++) {
        if (dp[right]) continue;
        const str = word.substring(left, right);
        dp[right] = dp[left] && dict.has(str);
      }
    }
    if (dp[length]) {
      result.push(word);
    }
  }

  return result;
};

var words = [
  'cat',
  'cats',
  'catsdogcats',
  'dog',
  'dogcatsdog',
  'hippopotamuses',
  'rat',
  'ratcatdogcat',
];
var expected = ['catsdogcats', 'dogcatsdog', 'ratcatdogcat'];
var result = findAllConcatenatedWordsInADict(words);
console.log(result, result.join() === expected.join());

var words = ['cat', 'dog', 'catdog'];
var expected = ['catdog'];
var result = findAllConcatenatedWordsInADict(words);
console.log(result, result.join() === expected.join());
