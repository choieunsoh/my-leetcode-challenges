// 1684. Count the Number of Consistent Strings
// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/
// T.C.: O(m+n*k)
// S.C.: O(1)
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0;
  let allowedBit = 0;
  const a = 'a'.charCodeAt();
  for (let i = 0; i < allowed.length; i++) {
    allowedBit |= 1 << (allowed.charCodeAt(i) - a);
  }

  for (const word of words) {
    let isConsistent = true;
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - a;
      if (((1 << index) & allowedBit) === 0) {
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
