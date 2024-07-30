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
  let bCount = 0;
  let result = 0;
  // result variable represents dp[i]
  for (let i = 0; i < n; i++) {
    if (s.charAt(i) === 'b') {
      bCount++;
    } else {
      // Two cases: remove 'a' or keep 'a'
      result = Math.min(result + 1, bCount);
    }
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
