// https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs?.length === 0) return '';

  let i = 0;
  while (strs[0][i] && strs.every((str) => str[i] === strs[0][i])) {
    i++;
  }

  return strs[0].substring(0, i);
};

var strs = ['flower', 'flow', 'flight'];
console.log(strs.join(), 'result = ', longestCommonPrefix(strs));

var strs = ['dog', 'racecar', 'car'];
console.log(strs.join(), 'result = ', longestCommonPrefix(strs));
