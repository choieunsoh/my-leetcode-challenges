// 2506. Count Pairs Of Similar Strings
// https://leetcode.com/problems/count-pairs-of-similar-strings/
// T.C.: O(n*m)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  const counts = new Map();
  const a = 'a'.charCodeAt(0);
  for (const word of words) {
    let mask = 0;
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - a;
      mask |= 1 << index;
    }
    counts.set(mask, (counts.get(mask) ?? 0) + 1);
  }

  let pairs = 0;
  for (const count of counts.values()) {
    if (count === 1) continue;
    pairs += ((count - 1) * count) / 2;
  }
  return pairs;
};

var words = ['aba', 'aabb', 'abcd', 'bac', 'aabc'];
var expected = 2;
var result = similarPairs(words);
console.log(result, result === expected);

var words = ['aabb', 'ab', 'ba'];
var expected = 3;
var result = similarPairs(words);
console.log(result, result === expected);

var words = ['nba', 'cba', 'dba'];
var expected = 0;
var result = similarPairs(words);
console.log(result, result === expected);
