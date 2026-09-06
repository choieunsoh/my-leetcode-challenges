// 132. Palindrome Partitioning II
// https://leetcode.com/problems/palindrome-partitioning-ii/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  let cutsDp = new Array(s.length).fill(0);
  for (let i = 1; i < s.length; i++) {
    cutsDp[i] = i;
  }
  for (let mid = 0; mid < s.length; mid++) {
    findMinimumCuts(mid, mid, cutsDp, s);
    findMinimumCuts(mid - 1, mid, cutsDp, s);
  }
  return cutsDp[s.length - 1];

  function findMinimumCuts(startIndex, endIndex, cutsDp, s) {
    for (
      let start = startIndex, end = endIndex;
      start >= 0 && end < s.length && s.charAt(start) == s.charAt(end);
      start--, end++
    ) {
      let newCut = start == 0 ? 0 : cutsDp[start - 1] + 1;
      cutsDp[end] = Math.min(cutsDp[end], newCut);
    }
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
