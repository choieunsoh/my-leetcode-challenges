// 1653. Minimum Deletions to Make String Balanced
// https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  const n = s.length;
  const aCount = new Array(n).fill(0);
  const bCount = new Array(n).fill(0);

  for (let i = 0, count = 0; i < n; i++) {
    bCount[i] = count;
    if (s.charAt(i) === 'b') count++;
  }
  for (let i = n - 1, count = 0; i >= 0; i--) {
    aCount[i] = count;
    if (s.charAt(i) === 'a') count++;
  }

  let result = n;
  for (let i = 0; i < n; i++) {
    result = Math.min(result, aCount[i] + bCount[i]);
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
