// 712. Minimum ASCII Delete Sum for Two Strings
// https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  // Prepare the two-dimensional array
  const m = s1.length;
  const n = s2.length;
  const computeCost = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // Fill in the base case values
  for (let i = 1; i <= m; i++) {
    computeCost[i][0] = computeCost[i - 1][0] + s1.charCodeAt(i - 1);
  }
  for (let j = 1; j <= n; j++) {
    computeCost[0][j] = computeCost[0][j - 1] + s2.charCodeAt(j - 1);
  }

  // Fill the remaining cells using the Bellman Equation
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
        computeCost[i][j] = computeCost[i - 1][j - 1];
      } else {
        computeCost[i][j] = Math.min(
          s1.charCodeAt(i - 1) + computeCost[i - 1][j],
          s2.charCodeAt(j - 1) + computeCost[i][j - 1]
        );
      }
    }
  }

  // Return the answer for entire input strings
  return computeCost[m][n];
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
