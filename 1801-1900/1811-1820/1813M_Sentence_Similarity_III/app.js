// 1813. Sentence Similarity III
// https://leetcode.com/problems/sentence-similarity-iii/description/
// T.C.: O(m+n)
// S.C.: O(m+n)
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  const words1 = sentence1.split(' ');
  const words2 = sentence2.split(' ');
  const n1 = words1.length;
  const n2 = words2.length;
  if (n1 > n2) return areSentencesSimilar(sentence2, sentence1);

  let start = 0;
  let end1 = n1 - 1;
  let end2 = n2 - 1;

  while (start < n1 && words1[start] === words2[start]) {
    start++;
  }

  while (end1 >= 0 && words1[end1] === words2[end2]) {
    end1--;
    end2--;
  }

  return end1 < start;
};

var sentence1 = 'My name is Haley',
  sentence2 = 'My Haley';
var expected = true;
var result = areSentencesSimilar(sentence1, sentence2);
console.log(result, result === expected);

var sentence1 = 'of',
  sentence2 = 'A lot of words';
var expected = false;
var result = areSentencesSimilar(sentence1, sentence2);
console.log(result, result === expected);

var sentence1 = 'Eating right now',
  sentence2 = 'Eating';
var expected = true;
var result = areSentencesSimilar(sentence1, sentence2);
console.log(result, result === expected);

var sentence1 = 'Eating',
  sentence2 = 'Eatinggggg';
var expected = false;
var result = areSentencesSimilar(sentence1, sentence2);
console.log(result, result === expected);
