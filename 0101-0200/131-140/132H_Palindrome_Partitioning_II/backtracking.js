// 132. Palindrome Partitioning II
// https://leetcode.com/problems/palindrome-partitioning-ii/description/
// T.C.: O(n*2^n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  return findMinimumCut(s, 0, s.length - 1, s.length - 1);

  function findMinimumCut(s, start, end, minimumCut) {
    // base condition, no cut needed for an empty substring or palindrome substring
    if (start === end || isPalindrome(s, start, end)) {
      return 0;
    }
    for (let currentEndIndex = start; currentEndIndex <= end; currentEndIndex++) {
      // find result for substring (start, currentEndIndex) is it is palindrome
      if (isPalindrome(s, start, currentEndIndex)) {
        minimumCut = Math.min(minimumCut, 1 + findMinimumCut(s, currentEndIndex + 1, end, minimumCut));
      }
    }
    return minimumCut;
  }

  function isPalindrome(s, start, end) {
    while (start < end) {
      if (s[start++] !== s[end--]) {
        return false;
      }
    }
    return true;
  }
};

var s = 'aab';
var expected = 1;
var result = minCut(s);
console.log(result, result === expected);

var s = 'a';
var expected = 0;
var result = minCut(s);
console.log(result, result === expected);

var s = 'ab';
var expected = 1;
var result = minCut(s);
console.log(result, result === expected);
