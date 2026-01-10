// 712. Minimum ASCII Delete Sum for Two Strings
// https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
// T.C.: O(m*n)
// S.C.: O(min(m,n))
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  const m = s1.length;
  const n = s2.length;
  if (m < n) return minimumDeleteSum(s2, s1);

  const currRow = new Array(n + 1).fill(0);
  for (let j = 1; j <= n; j++) {
    currRow[j] = currRow[j - 1] + s2.charCodeAt(j - 1);
  }

  for (let i = 1; i <= m; i++) {
    let diag = currRow[0];
    currRow[0] += s1.charCodeAt(i - 1);
    for (let j = 1; j <= n; j++) {
      let answer = diag;
      if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
        const cost1 = s1.charCodeAt(i - 1) + currRow[j];
        const cost2 = s2.charCodeAt(j - 1) + currRow[j - 1];
        answer = Math.min(cost1, cost2);
      }

      diag = currRow[j];
      currRow[j] = answer;
    }
  }
  return currRow[n];
};

var s1 = 'sea',
  s2 = 'eat';
var expected = 231;
var result = minimumDeleteSum(s1, s2);
console.log(result, result === expected);

var s1 = 'delete',
  s2 = 'leet';
var expected = 403;
var result = minimumDeleteSum(s1, s2);
console.log(result, result === expected);
