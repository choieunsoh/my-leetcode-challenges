// 1897. Redistribute Characters to Make All Strings Equal
// https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/description/
// T.C.: O(n * m)
// S.C.: O(1)
/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  const n = words.length;
  const a = 'a'.charCodeAt();
  const counts = new Array(26).fill(0);
  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      counts[word.charCodeAt(i) - a]++;
    }
  }

  for (const count of counts) {
    if (count % n !== 0) {
      return false;
    }
  }
  return true;
};

var words = ['abc', 'aabc', 'bc'];
var expected = true;
var result = makeEqual(words);
console.log(result, result === expected);

var words = ['ab', 'a'];
var expected = false;
var result = makeEqual(words);
console.log(result, result === expected);
