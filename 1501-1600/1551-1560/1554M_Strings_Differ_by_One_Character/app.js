// 1554. Strings Differ by One Character
// https://leetcode.com/problems/strings-differ-by-one-character/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {string[]} dict
 * @return {boolean}
 */
var differByOne = function (dict) {
  if (!dict.length) return false;

  // Here we calculate the expected runtime of the two alternative
  // solutions to see which strategy to apply
  const solution1 = dict[0].length ** 2 * dict.length;
  const solution2 = dict.length * dict.length;

  // We are switching strategies depending on which has better efficiency
  if (solution1 < solution2) {
    // This algorithm is fast with words that are short however it falls apart
    // as word length increases and eventually fails due to memory limits
    const found = new Set();
    for (const word of dict) {
      for (let i = 0; i < word.length; i++) {
        const key = word.slice(0, i) + '*' + word.slice(i + 1, word.length);
        if (found.has(key)) return true;
        found.add(key);
      }
    }
    return false;
  } else {
    // This algorithm is better against small N of words. Since this problem
    // is constrained by the *total number of characters in the question*
    // we know that dictionaries containing long words must have small N
    for (let i = 0; i < dict.length; i++) {
      for (let j = i + 1; j < dict.length; j++) {
        if (compareTwoStrings(dict[i], dict[j])) return true;
      }
    }
    return false;
  }

  function compareTwoStrings(string1, string2) {
    let misses = 0;
    for (let i = 0; i < string1.length; i++) {
      if (string1[i] !== string2[i]) {
        misses++;
        if (misses > 1) return false;
      }
    }
    return !!misses;
  }
};

var dict = ['abcd', 'acbd', 'aacd'];
var expected = true;
var result = differByOne(dict);
console.log(result, result === expected);

var dict = ['ab', 'cd', 'yz'];
var expected = false;
var result = differByOne(dict);
console.log(result, result === expected);

var dict = ['abcd', 'cccc', 'abyd', 'abab'];
var expected = true;
var result = differByOne(dict);
console.log(result, result === expected);
