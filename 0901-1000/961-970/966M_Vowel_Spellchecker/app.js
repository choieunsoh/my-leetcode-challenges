// 966. Vowel Spellchecker
// https://leetcode.com/problems/vowel-spellchecker/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
  const matchWords = new Set(wordlist);
  const mappingWords = new Map();
  for (const word of wordlist) {
    const lower = word.toLowerCase();
    if (!mappingWords.has(lower)) {
      mappingWords.set(lower, word);
    }

    const replaced = lower.replace(/[aeiou]/g, '_');
    if (!mappingWords.has(replaced)) {
      mappingWords.set(replaced, word);
    }
  }

  const result = [];
  for (const query of queries) {
    if (matchWords.has(query)) {
      result.push(query);
      continue;
    }

    const lower = query.toLowerCase();
    if (mappingWords.has(lower)) {
      result.push(mappingWords.get(lower));
      continue;
    }

    const replaced = lower.replace(/[aeiou]/g, '_');
    if (mappingWords.has(replaced)) {
      result.push(mappingWords.get(replaced));
      continue;
    }

    result.push('');
  }
  return result;
};

var wordlist = ['KiTe', 'kite', 'hare', 'Hare'],
  queries = ['kite', 'Kite', 'KiTe', 'Hare', 'HARE', 'Hear', 'hear', 'keti', 'keet', 'keto'];
var expected = ['kite', 'KiTe', 'KiTe', 'Hare', 'hare', '', '', 'KiTe', '', 'KiTe'];
var result = spellchecker(wordlist, queries);
console.log(result, result.join() === expected.join());

var wordlist = ['yellow'],
  queries = ['YellOw'];
var expected = ['yellow'];
var result = spellchecker(wordlist, queries);
console.log(result, result.join() === expected.join());
