// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort();
  const firstWord = strs[0];
  const lastWord = strs[strs.length - 1];
  let index = 0;
  while (index < firstWord.length && index < lastWord.length) {
    if (firstWord.charAt(index) === lastWord.charAt(index)) {
      index++;
    } else {
      break;
    }
  }
  return firstWord.substring(0, index);
};

var strs = ['flower', 'flow', 'flight'];
var expected = 'fl';
var result = longestCommonPrefix(strs);
console.log(result, result === expected);

var strs = ['dog', 'racecar', 'car'];
var expected = '';
var result = longestCommonPrefix(strs);
console.log(result, result === expected);
