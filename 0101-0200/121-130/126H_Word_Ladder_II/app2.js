// 126. Word Ladder II
// https://leetcode.com/problems/word-ladder-ii/
// T.C.: O(n^2 * m)
// S.C.: O(n)
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return [];
  wordSet.add(beginWord);

  const distanceMap = new Map();
  const wordMap = new Map();
  const seen = new Set();
  let queue = [endWord];
  let distance = 0;
  let reached = false;

  seen.add(endWord);
  distanceMap.set(endWord, distance);

  while (queue.length) {
    distance++;
    const qq = [];
    for (const word of queue) {
      const nextWords = getNextWords(word, wordSet);
      for (const nextWord of nextWords) {
        if (!wordMap.has(nextWord)) wordMap.set(nextWord, []);
        wordMap.get(nextWord).push(word);

        if (seen.has(nextWord)) continue;
        if (nextWord === beginWord) reached = true;

        distanceMap.set(nextWord, distance);
        qq.push(nextWord);
        seen.add(nextWord);
      }
    }
    queue = qq;
  }

  if (!reached) return [];

  const result = [];
  dfs(result, [beginWord], beginWord, endWord, wordMap, distanceMap);
  return result;

  function getNextWords(word, wordSet) {
    const result = [];
    for (let i = 0; i < word.length; i++) {
      const code = word.charCodeAt(i);
      for (let c = 97; c <= 122; c++) {
        if (c === code) continue;
        const chars = word.split('');
        chars[i] = String.fromCharCode(c);
        const newWord = chars.join('');
        if (wordSet.has(newWord)) {
          result.push(newWord);
        }
      }
    }
    return result;
  }

  function dfs(result, path, word, endWord, wordMap, distanceMap) {
    if (word === endWord) {
      result.push([...path]);
      return;
    }

    for (const nextWord of wordMap.get(word)) {
      if (distanceMap.get(word) === distanceMap.get(nextWord) + 1) {
        dfs(result, [...path, nextWord], nextWord, endWord, wordMap, distanceMap);
      }
    }
  }
};

var beginWord = 'hit',
  endWord = 'cog',
  wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
var expected = [
  ['hit', 'hot', 'dot', 'dog', 'cog'],
  ['hit', 'hot', 'lot', 'log', 'cog'],
];
var result = findLadders(beginWord, endWord, wordList);
console.log(result, result.join() === expected.join());

var beginWord = 'hit',
  endWord = 'cog',
  wordList = ['hot', 'dot', 'dog', 'lot', 'log'];
var expected = [];
var result = findLadders(beginWord, endWord, wordList);
console.log(result, result.join() === expected.join());
