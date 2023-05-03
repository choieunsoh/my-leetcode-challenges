// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') return '';
    }
  }
  return prefix;
};

var strs = ['flower', 'flow', 'flight'];
var expected = 'fl';
var result = longestCommonPrefix(strs);
console.log(result, result === expected);

var strs = ['dog', 'racecar', 'car'];
var expected = '';
var result = longestCommonPrefix(strs);
console.log(result, result === expected);

var strs = ['a'];
var expected = 'a';
var result = longestCommonPrefix(strs);
console.log(result, result === expected);
