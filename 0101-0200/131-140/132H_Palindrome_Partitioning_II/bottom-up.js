// 132. Palindrome Partitioning II
// https://leetcode.com/problems/palindrome-partitioning-ii/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const cutsDp = new Array(s.length).fill(0);
  const palindromeDp = Array.from(Array(s.length), () => new Array(s.length).fill(false));
  // build the palindrome cutsDp for all susbtrings
  buildPalindromeDp(s, s.length);
  for (let end = 0; end < s.length; end++) {
    let minimumCut = end;
    for (let start = 0; start <= end; start++) {
      if (palindromeDp[start][end]) {
        minimumCut = start === 0 ? 0 : Math.min(minimumCut, cutsDp[start - 1] + 1);
      }
    }
    cutsDp[end] = minimumCut;
  }
  return cutsDp[s.length - 1];

  function buildPalindromeDp(s, n) {
    for (let end = 0; end < s.length; end++) {
      for (let start = 0; start <= end; start++) {
        if (s[start] == s[end] && (end - start <= 2 || palindromeDp[start + 1][end - 1])) {
          palindromeDp[start][end] = true;
        }
      }
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
