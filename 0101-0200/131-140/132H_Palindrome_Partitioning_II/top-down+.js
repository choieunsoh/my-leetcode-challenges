// 132. Palindrome Partitioning II
// https://leetcode.com/problems/palindrome-partitioning-ii/description/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const memoCuts = new Array(s.length).fill(null);
  const memoPalindrome = new Array(s.length).fill(null).map((_) => new Array(s.length).fill(null));
  return findMinimumCut(s, 0, s.length - 1, s.length - 1);

  function findMinimumCut(s, start, end, minimumCut) {
    // base case
    if (start == end || isPalindrome(s, start, end)) {
      return 0;
    }
    // check for results in memoCuts
    if (memoCuts[start] != null) {
      return memoCuts[start];
    }
    for (let currentEndIndex = start; currentEndIndex <= end; currentEndIndex++) {
      if (isPalindrome(s, start, currentEndIndex)) {
        minimumCut = Math.min(minimumCut, 1 + findMinimumCut(s, currentEndIndex + 1, end, minimumCut));
      }
    }
    return (memoCuts[start] = minimumCut);
  }

  function isPalindrome(s, start, end) {
    if (start >= end) {
      return true;
    }
    // check for results in memoPalindrome
    if (memoPalindrome[start][end] != null) {
      return memoPalindrome[start][end];
    }
    return (memoPalindrome[start][end] = s[start] == s[end] && isPalindrome(s, start + 1, end - 1));
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
