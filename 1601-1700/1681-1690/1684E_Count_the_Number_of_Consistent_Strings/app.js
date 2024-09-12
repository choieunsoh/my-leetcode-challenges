// 1684. Count the Number of Consistent Strings
// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/
// T.C.: O(m+n*k)
// S.C.: O(m)
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0;
  const allowedSet = new Set(allowed.split(''));
  for (const word of words) {
    let isConsistent = true;
    for (const char of word) {
      if (!allowedSet.has(char)) {
        isConsistent = false;
        break;
      }
    }
    if (isConsistent) {
      count++;
    }
  }
  return count;
};

var allowed = 'ab',
  words = ['ad', 'bd', 'aaab', 'baa', 'badab'];
var expected = 2;
var result = countConsistentStrings(allowed, words);
console.log(result, result === expected);

var allowed = 'abc',
  words = ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'];
var expected = 7;
var result = countConsistentStrings(allowed, words);
console.log(result, result === expected);

var allowed = 'cad',
  words = ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'];
var expected = 4;
var result = countConsistentStrings(allowed, words);
console.log(result, result === expected);
