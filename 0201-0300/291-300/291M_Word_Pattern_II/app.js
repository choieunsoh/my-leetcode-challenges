// 291. Word Pattern II
// https://leetcode.com/problems/word-pattern-ii/description/
// T.C.: O(p * n * (n - p)^2)
// S.C.: O(p + n)
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPatternMatch = function (pattern, s) {
  const a = 'a'.charCodeAt(0);
  const symbols = new Array(26).fill('');
  const wordSet = new Set();
  return isMatch(0, 0);

  function isMatch(sIndex, pIndex) {
    if (sIndex === s.length) {
      return pIndex === pattern.length;
    }

    const symbol = pattern.charCodeAt(pIndex) - a;
    if (symbols[symbol] !== '') {
      const word = symbols[symbol];
      if (!s.startsWith(word, sIndex)) {
        return false;
      }

      return isMatch(sIndex + word.length, pIndex + 1);
    }

    let filledSpots = 0;
    for (let i = pIndex + 1; i < pattern.length; i++) {
      const p = pattern.charCodeAt(i) - a;
      filledSpots += symbols[p] === '' ? 1 : symbols[p].length;
    }

    for (let i = sIndex + 1; i <= s.length - filledSpots; i++) {
      const newWord = s.substring(sIndex, i);
      if (wordSet.has(newWord)) continue;

      symbols[symbol] = newWord;
      wordSet.add(newWord);

      if (isMatch(i, pIndex + 1)) {
        return true;
      }

      symbols[symbol] = '';
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
