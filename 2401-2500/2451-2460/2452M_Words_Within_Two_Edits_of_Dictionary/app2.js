// 2452. Words Within Two Edits of Dictionary
// https://leetcode.com/problems/words-within-two-edits-of-dictionary/description/
// T.C.: O(q * k * n)
// S.C.: O(1)
/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
  const result = [];
  const n = queries[0].length;
  for (const query of queries) {
    for (const word of dictionary) {
      let edit = 0;
      for (let i = 0; i < n; i++) {
        if (query[i] !== word[i]) {
          edit++;
        }
        if (edit > 2) {
          break;
        }
      }
      if (edit <= 2) {
        result.push(query);
        break;
      }
    }
  }
  return result;
};

var queries = ['word', 'note', 'ants', 'wood'],
  dictionary = ['wood', 'joke', 'moat'];
var expected = ['word', 'note', 'wood'];
var result = twoEditWords(queries, dictionary);
console.log(result, result.join() === expected.join());

var queries = ['yes'],
  dictionary = ['not'];
var expected = [];
var result = twoEditWords(queries, dictionary);
console.log(result, result.join() === expected.join());
