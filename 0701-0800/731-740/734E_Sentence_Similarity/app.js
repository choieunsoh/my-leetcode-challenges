// 734. Sentence Similarity
// https://leetcode.com/problems/sentence-similarity/description/
// T.C.: O(m*n)
// S.C.: O(n)
/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2, similarPairs) {
  const n1 = sentence1.length;
  const n2 = sentence2.length;
  if (n1 !== n2) return false;

  const map = new Map();
  for (const [x, y] of similarPairs) {
    if (!map.has(x)) map.set(x, new Set());
    if (!map.has(y)) map.set(y, new Set());
    map.get(x).add(y);
    map.get(y).add(x);
  }

  for (let i = 0; i < n1; i++) {
    const word1 = sentence1[i];
    const word2 = sentence2[i];
    if (word1 === word2) continue;
    if (!map.has(word1) || !map.has(word2)) return false;
    if (!map.get(word1).has(word2)) return false;
    if (!map.get(word2).has(word1)) return false;
  }
  return true;
};

var sentence1 = ['great', 'acting', 'skills'],
  sentence2 = ['fine', 'drama', 'talent'],
  similarPairs = [
    ['great', 'fine'],
    ['drama', 'acting'],
    ['skills', 'talent'],
  ];
var expected = true;
var result = areSentencesSimilar(sentence1, sentence2, similarPairs);
console.log(result, result === expected);

var sentence1 = ['great'],
  sentence2 = ['great'],
  similarPairs = [];
var expected = true;
var result = areSentencesSimilar(sentence1, sentence2, similarPairs);
console.log(result, result === expected);

var sentence1 = ['great'],
  sentence2 = ['doubleplus', 'good'],
  similarPairs = [['great', 'doubleplus']];
var expected = false;
var result = areSentencesSimilar(sentence1, sentence2, similarPairs);
console.log(result, result === expected);

var sentence1 = ['great'],
  sentence2 = ['good'],
  similarPairs = [];
var expected = false;
var result = areSentencesSimilar(sentence1, sentence2, similarPairs);
console.log(result, result === expected);

var sentence1 = ['an', 'extraordinary', 'meal'],
  sentence2 = ['one', 'good', 'dinner'],
  similarPairs = [
    ['great', 'good'],
    ['extraordinary', 'good'],
    ['well', 'good'],
    ['wonderful', 'good'],
    ['excellent', 'good'],
    ['fine', 'good'],
    ['nice', 'good'],
    ['any', 'one'],
    ['some', 'one'],
    ['unique', 'one'],
    ['the', 'one'],
    ['an', 'one'],
    ['single', 'one'],
    ['a', 'one'],
    ['truck', 'car'],
    ['wagon', 'car'],
    ['automobile', 'car'],
    ['auto', 'car'],
    ['vehicle', 'car'],
    ['entertain', 'have'],
    ['drink', 'have'],
    ['eat', 'have'],
    ['take', 'have'],
    ['fruits', 'meal'],
    ['brunch', 'meal'],
    ['breakfast', 'meal'],
    ['food', 'meal'],
    ['dinner', 'meal'],
    ['super', 'meal'],
    ['lunch', 'meal'],
    ['possess', 'own'],
    ['keep', 'own'],
    ['have', 'own'],
    ['extremely', 'very'],
    ['actually', 'very'],
    ['really', 'very'],
    ['super', 'very'],
  ];
var expected = true;
var result = areSentencesSimilar(sentence1, sentence2, similarPairs);
console.log(result, result === expected);
