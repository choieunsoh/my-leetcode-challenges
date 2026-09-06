// 132. Palindrome Partitioning II
// https://leetcode.com/problems/palindrome-partitioning-ii/description/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const n = s.length;
  const memoCuts = Array.from({ length: n }, () => Array(n).fill(-1));
  const memoPalindrome = Array.from({ length: n }, () => Array(n).fill(null));

  // Function to check if the substring is a palindrome
  const isPalindrome = (start, end) => {
    if (start >= end) return true;
    if (memoPalindrome[start][end] !== null) return memoPalindrome[start][end];
    memoPalindrome[start][end] = s[start] === s[end] && isPalindrome(start + 1, end - 1);
    return memoPalindrome[start][end];
  };

  return findMinimumCut(0, n - 1, n - 1);

  // Function to find the minimum cut for palindrome partitioning
  function findMinimumCut(start, end, minimumCut) {
    // base case
    if (start === end || isPalindrome(start, end)) {
      return 0;
    }

    // check for results in memoCuts
    if (memoCuts[start][end] !== -1) {
      return memoCuts[start][end];
    }

    for (let currentEndIndex = start; currentEndIndex <= end; currentEndIndex++) {
      if (isPalindrome(start, currentEndIndex)) {
        minimumCut = Math.min(minimumCut, 1 + findMinimumCut(currentEndIndex + 1, end, minimumCut));
      }
    }
    memoCuts[start][end] = minimumCut;
    return minimumCut;
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
