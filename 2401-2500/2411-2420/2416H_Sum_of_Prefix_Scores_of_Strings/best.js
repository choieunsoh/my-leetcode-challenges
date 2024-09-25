// 2416. Sum of Prefix Scores of Strings
// https://leetcode.com/problems/sum-of-prefix-scores-of-strings/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function (words) {
  const indices = [];
  let n = words.length;

  for (let i = 0; i < n; i++) indices.push(i);
  indices.sort((a, b) => words[a].localeCompare(words[b]));

  let result = words.map((w) => w.length);

  for (let ri = 0; ri < n; ri++) {
    const rw = words[indices[ri]];
    let p = 0;
    for (let li = 0; li < ri; li++) {
      const lw = words[indices[li]];

      while (p < rw.length && rw[p] === lw[p]) p++;
      result[indices[ri]] += p;
      result[indices[li]] += p;
    }
  }

  return result;
};

var words = ['abc', 'ab', 'bc', 'b'];
var expected = [5, 4, 3, 2];
var result = sumPrefixScores(words);
console.log(result, result.join() === expected.join());

var words = ['abcd'];
var expected = [4];
var result = sumPrefixScores(words);
console.log(result, result.join() === expected.join());
