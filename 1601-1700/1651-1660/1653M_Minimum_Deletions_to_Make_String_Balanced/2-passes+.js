// 1653. Minimum Deletions to Make String Balanced
// https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  const n = s.length;
  let aCount = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (s.charAt(i) === 'a') aCount++;
  }

  let result = n;
  let bCount = 0;
  for (let i = 0; i < n; i++) {
    if (s.charAt(i) === 'a') aCount--;
    result = Math.min(result, aCount + bCount);
    if (s.charAt(i) === 'b') bCount++;
  }
  return result;
};

var s = 'aababbab';
var expected = 2;
var result = minimumDeletions(s);
console.log(result, result === expected);

var s = 'bbaaaaabb';
var expected = 2;
var result = minimumDeletions(s);
console.log(result, result === expected);
