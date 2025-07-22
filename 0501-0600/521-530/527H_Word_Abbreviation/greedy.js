// 527. Word Abbreviation
// https://leetcode.com/problems/word-abbreviation/description/
// T.C.: O(C^2)
// S.C.: O(C)
/**
 * @param {string[]} words
 * @return {string[]}
 */
var wordsAbbreviation = function (words) {
  const n = words.length;
  const result = new Array(n);
  const prefix = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    result[i] = abbr(words[i], 0);
  }

  for (let i = 0; i < n; i++) {
    while (true) {
      const seen = new Set();
      for (let j = i + 1; j < n; j++) {
        if (result[i] === result[j]) {
          seen.add(j);
        }
      }

      if (seen.size === 0) break;

      seen.add(i);
      for (const k of seen) {
        result[k] = abbr(words[k], ++prefix[k]);
      }
    }
  }
  return result;

  function abbr(word, i) {
    const n = word.length;
    if (n - i <= 3) return word;
    return word.slice(0, i + 1) + (n - i - 2) + word.slice(-1);
  }
};

var words = ['like', 'god', 'internal', 'me', 'internet', 'interval', 'intension', 'face', 'intrusion'];
var expected = ['l2e', 'god', 'internal', 'me', 'i6t', 'interval', 'inte4n', 'f2e', 'intr4n'];
var result = wordsAbbreviation(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['aa', 'aaa'];
var expected = ['aa', 'aaa'];
var result = wordsAbbreviation(words);
console.log(result, result.sort().join() === expected.sort().join());
