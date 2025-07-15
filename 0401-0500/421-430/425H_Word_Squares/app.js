// 425. Word Squares
// https://leetcode.com/problems/word-squares/
// T.C.: O(N*26*L)
// S.C.: O(N*L)
/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function (words) {
  const result = [];
  const n = words[0].length;
  const prefixMap = buildPrefix();

  for (const word of words) {
    const wordList = [word];
    backtracking(1, wordList);
  }

  return result;

  function backtracking(step, wordList) {
    if (step === n) {
      result.push([...wordList]);
      return;
    }

    let prefix = '';
    for (const word of wordList) {
      prefix += word.charAt(step);
    }

    const candidates = prefixMap.get(prefix) ?? [];
    for (const candidate of candidates) {
      backtracking(step + 1, [...wordList, candidate]);
    }
  }

  function buildPrefix() {
    const prefixMap = new Map();
    for (const word of words) {
      for (let i = 1; i < n; i++) {
        const prefix = word.substring(0, i);
        if (!prefixMap.has(prefix)) {
          prefixMap.set(prefix, []);
        }
        prefixMap.get(prefix).push(word);
      }
    }
    return prefixMap;
  }
};

var words = ['area', 'lead', 'wall', 'lady', 'ball'];
var expected = [
  ['ball', 'area', 'lead', 'lady'],
  ['wall', 'area', 'lead', 'lady'],
];
var result = wordSquares(words);
console.log(result, result.sort().join() === expected.sort().join());

var words = ['abat', 'baba', 'atan', 'atal'];
var expected = [
  ['baba', 'abat', 'baba', 'atal'],
  ['baba', 'abat', 'baba', 'atan'],
];
var result = wordSquares(words);
console.log(result, result.sort().join() === expected.sort().join());
