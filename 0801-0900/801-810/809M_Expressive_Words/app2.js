// 809. Expressive Words
// https://leetcode.com/problems/expressive-words/
// T.C.: O(n * m)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  let result = 0;
  for (const word of words) {
    if (isExpressiveWord(word)) result++;
  }
  return result;

  function isExpressiveWord(word) {
    let j = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === word[j]) {
        j++;
      } else if (s[i] === s[i - 1] && s[i - 1] === s[i - 2]) {
        continue;
      } else if (s[i] === s[i - 1] && s[i] === s[i + 1]) {
        continue;
      } else {
        return false;
      }
    }
    return j === word.length;
  }
};

var s = 'heeellooo',
  words = ['hello', 'hi', 'helo'];
var expected = 1;
var result = expressiveWords(s, words);
console.log(result, result === expected);

var s = 'zzzzzyyyyy',
  words = ['zzyy', 'zy', 'zyy'];
var expected = 3;
var result = expressiveWords(s, words);
console.log(result, result === expected);
