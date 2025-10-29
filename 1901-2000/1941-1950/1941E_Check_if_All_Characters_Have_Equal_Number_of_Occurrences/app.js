// 1941. Check if All Characters Have Equal Number of Occurrences
// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  let occurrences = 0;
  for (let i = 0; i < s.length; i++) {
    occurrences = ++counts[s.charCodeAt(i) - a];
  }

  for (const count of counts) {
    if (count === 0) continue;
    if (count !== occurrences) return false;
  }
  return true;
};

var s = 'abacbc';
var expected = true;
var result = areOccurrencesEqual(s);
console.log(result, result === expected);

var s = 'aaabb';
var expected = false;
var result = areOccurrencesEqual(s);
console.log(result, result === expected);
