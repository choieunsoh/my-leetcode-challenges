// 3146. Permutation Difference between Two Strings
// https://leetcode.com/problems/permutation-difference-between-two-strings/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  const a = 'a'.charCodeAt(0);
  const indices = new Array(26).fill(0);
  for (let sIndex = 0; sIndex < s.length; sIndex++) {
    const charIndex = s.charCodeAt(sIndex) - a;
    indices[charIndex] = sIndex;
  }

  let diff = 0;
  for (let tIndex = 0; tIndex < t.length; tIndex++) {
    const sIndex = t.charCodeAt(tIndex) - a;
    diff += Math.abs(tIndex - indices[sIndex]);
  }

  return diff;
};

var s = 'abc',
  t = 'bac';
var expected = 2;
var result = findPermutationDifference(s, t);
console.log(result, result === expected);

var s = 'abcde',
  t = 'edbac';
var expected = 12;
var result = findPermutationDifference(s, t);
console.log(result, result === expected);
