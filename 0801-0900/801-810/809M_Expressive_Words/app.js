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
  const sLen = s.length;
  let result = 0;
  for (const word of words) {
    if (isExpressiveWord(word)) result++;
  }
  return result;

  function isExpressiveWord(word) {
    const wLen = word.length;
    let i = 0;
    let j = 0;
    while (i < sLen || j < wLen) {
      let sCount = 1;
      let wCount = 1;
      if (s[i] !== word[j]) return false;

      while (s[i] === s[i++ + 1]) sCount++;
      while (word[j] === word[j++ + 1]) wCount++;

      if (sCount < wCount) return false;
      if (sCount !== wCount && sCount < 3) return false;
    }

    return true;
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
