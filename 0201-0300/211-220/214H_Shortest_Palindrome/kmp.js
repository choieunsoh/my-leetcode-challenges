// 214. Shortest Palindrome
// https://leetcode.com/problems/shortest-palindrome/description/
// KMP (Knuth-Morris-Pratt) Algorithm
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  const rs = reverse(s);
  const combineString = s + '#' + rs;
  const prefixTable = buildPrefixTable(combineString);

  const palindromeLength = prefixTable.at(-1);
  const suffix = reverse(s.slice(palindromeLength));
  return suffix + s;

  function buildPrefixTable(s) {
    const n = s.length;
    const prefixTable = new Array(n).fill(0);
    let length = 0;
    for (let i = 1; i < n; i++) {
      while (length > 0 && s[i] !== s[length]) {
        length = prefixTable[length - 1];
      }

      if (s[i] === s[length]) {
        length++;
      }
      prefixTable[i] = length;
    }
    return prefixTable;
  }

  function reverse(str) {
    return str.split('').reverse().join('');
  }
};

var s = 'aacecaaa';
var expected = 'aaacecaaa';
var result = shortestPalindrome(s);
console.log(result, result === expected);

var s = 'abcd';
var expected = 'dcbabcd';
var result = shortestPalindrome(s);
console.log(result, result === expected);
