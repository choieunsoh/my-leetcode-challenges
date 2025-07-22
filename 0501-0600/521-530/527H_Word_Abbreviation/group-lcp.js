// 527. Word Abbreviation
// https://leetcode.com/problems/word-abbreviation/description/
// T.C.: O(C log C)
// S.C.: O(C)
/**
 * @param {string[]} words
 * @return {string[]}
 */
var wordsAbbreviation = function (words) {
  const n = words.length;
  const groups = new Map();
  const result = new Array(n);

  let index = 0;
  for (const word of words) {
    const ab = abbr(word, 0);
    if (!groups.has(ab)) {
      groups.set(ab, []);
    }
    groups.get(ab).push(new IndexedWord(word, index));
    index++;
  }

  for (const group of groups.values()) {
    group.sort((a, b) => a.word.localeCompare(b.word));

    const lcp = new Array(group.length).fill(0);
    for (let i = 1; i < group.length; i++) {
      const p = longestCommonPrefix(group[i - 1].word, group[i].word);
      lcp[i] = p;
      lcp[i - 1] = Math.max(lcp[i - 1], p);
    }

    for (let i = 0; i < group.length; i++) {
      result[group[i].index] = abbr(group[i].word, lcp[i]);
    }
  }

  return result;

  function abbr(word, i) {
    const n = word.length;
    if (n - i <= 3) return word;
    return word.slice(0, i + 1) + (n - i - 2) + word.slice(-1);
  }

  function longestCommonPrefix(word1, word2) {
    let i = 0;
    while (i < word1.length && i < word2.length && word1.charAt(i) === word2.charAt(i)) {
      i++;
    }
    return i;
  }
};

class IndexedWord {
  constructor(word, index) {
    this.word = word;
    this.index = index;
  }
}

var words = ['like', 'god', 'internal', 'me', 'internet', 'interval', 'intension', 'face', 'intrusion'];
var expected = ['l2e', 'god', 'internal', 'me', 'i6t', 'interval', 'inte4n', 'f2e', 'intr4n'];
var result = wordsAbbreviation(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['aa', 'aaa'];
var expected = ['aa', 'aaa'];
var result = wordsAbbreviation(words);
console.log(result, result.sort().join() === expected.sort().join());
