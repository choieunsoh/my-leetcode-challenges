// 3042. Count Prefix and Suffix Pairs I
// https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
        count++;
      }
    }
  }
  return count;
};

var words = ['a', 'aba', 'ababa', 'aa'];
var expected = 4;
var result = countPrefixSuffixPairs(words);
console.log(result, result === expected);

var words = ['pa', 'papa', 'ma', 'mama'];
var expected = 2;
var result = countPrefixSuffixPairs(words);
console.log(result, result === expected);

var words = ['abab', 'ab'];
var expected = 0;
var result = countPrefixSuffixPairs(words);
console.log(result, result === expected);
