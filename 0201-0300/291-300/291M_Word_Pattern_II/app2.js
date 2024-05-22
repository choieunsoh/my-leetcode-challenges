// 291. Word Pattern II
// https://leetcode.com/problems/word-pattern-ii/description/
// T.C.: O(p * n^3)
// S.C.: O(p + n)
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPatternMatch = function (pattern, s) {
  const symbolMap = new Map();
  const wordSet = new Set();
  return isMatch(0, 0);

  function isMatch(sIndex, pIndex) {
    if (sIndex === s.length) {
      return pIndex === pattern.length;
    }

    const symbol = pattern.charAt(pIndex);
    if (symbolMap.has(symbol)) {
      const word = symbolMap.get(symbol);
      if (!s.startsWith(word, sIndex)) {
        return false;
      }

      return isMatch(sIndex + word.length, pIndex + 1);
    }

    for (let i = sIndex + 1; i <= s.length; i++) {
      const newWord = s.substring(sIndex, i);
      if (wordSet.has(newWord)) continue;

      symbolMap.set(symbol, newWord);
      wordSet.add(newWord);

      if (isMatch(i, pIndex + 1)) {
        return true;
      }

      symbolMap.delete(symbol);
      wordSet.delete(newWord);
    }

    return false;
  }
};

var pattern = 'abab',
  s = 'redblueredblue';
var expected = true;
var result = wordPatternMatch(pattern, s);
console.log(result, result === expected);

var pattern = 'aaaa',
  s = 'asdasdasdasd';
var expected = true;
var result = wordPatternMatch(pattern, s);
console.log(result, result === expected);

var pattern = 'aabb',
  s = 'xyzabcxzyabc';
var expected = false;
var result = wordPatternMatch(pattern, s);
console.log(result, result === expected);

var pattern = 'a',
  s = 'z';
var expected = true;
var result = wordPatternMatch(pattern, s);
console.log(result, result === expected);
