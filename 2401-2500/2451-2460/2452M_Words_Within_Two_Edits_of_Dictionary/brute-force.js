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
  for (const query of queries) {
    for (const s of dictionary) {
      let dis = 0;
      for (let i = 0; i < query.length; i++) {
        if (query[i] !== s[i]) {
          dis++;
        }
      }
      if (dis <= 2) {
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
