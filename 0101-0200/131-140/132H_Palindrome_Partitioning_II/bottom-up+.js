// 132. Palindrome Partitioning II
// https://leetcode.com/problems/palindrome-partitioning-ii/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const cuts = new Array(s.length);
  const palindrome = new Array(s.length).fill().map(() => new Array(s.length).fill(false));
  for (let end = 0; end < s.length; end++) {
    let minimumCut = end;
    for (let start = 0; start <= end; start++) {
      // check if substring (start, end) is palindrome
      if (s.charAt(start) == s.charAt(end) && (end - start <= 2 || palindrome[start + 1][end - 1])) {
        palindrome[start][end] = true;
        minimumCut = start == 0 ? 0 : Math.min(minimumCut, cuts[start - 1] + 1);
      }
    }
    cuts[end] = minimumCut;
  }
  return cuts[s.length - 1];
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
