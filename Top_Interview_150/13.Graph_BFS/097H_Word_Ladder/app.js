// 127. Word Ladder
// https://leetcode.com/problems/word-ladder/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const words = new Set(wordList);
  if (!words.has(endWord)) return 0;

  let changes = 1;
  const a = 'a'.charCodeAt(0);
  const seen = new Set();
  let queue = [beginWord];
  while (queue.length) {
    const qq = [];
    for (let k = 0; k < queue.length; k++) {
      const word = queue[k];
      if (word === endWord) return changes;

      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          const ch = String.fromCharCode(a + j);
          const nextWord = word.substring(0, i) + ch + word.substring(i + 1);

          if (!words.has(nextWord) || seen.has(nextWord)) continue;

          if (nextWord === endWord) return changes + 1;

          seen.add(nextWord);
          qq.push(nextWord);
        }
      }
    }
    changes++;
    queue = qq;
  }
  return 0;
};

var beginWord = 'hit',
  endWord = 'cog',
  wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
var expected = 5;
var result = ladderLength(beginWord, endWord, wordList);
console.log(result, result === expected);

var beginWord = 'hit',
  endWord = 'cog',
  wordList = ['hot', 'dot', 'dog', 'lot', 'log'];
var expected = 0;
var result = ladderLength(beginWord, endWord, wordList);
console.log(result, result === expected);
